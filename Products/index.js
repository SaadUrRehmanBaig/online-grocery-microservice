const express = require("express");
const axios = require("axios")

const app = express();

app.use("/", (req, res, next) => {
    next()
})

app.use("*", async (req, res) => {
    console.log(123);
    try {
        // Forward the original request to the API gateway
        const response = await axios({
            method: req.method,
            url: `http://localhost:3000/`,
            headers: {
                ...req.headers, // Include the original request headers
                'X-Forwarded-For': req.ip, // Include the client IP address
                'X-Original-Host': req.headers.host // Include the original host
            },
            data: req.body // Include the request body
        });

        // Return the API gateway response to the client
        res.status(response.status).send(response.data);
    } catch (error) {
        // Handle errors
        res.status(500).send(error);
    }
})

app.listen(3002, () => {
    console.log("Product service runnig on port 3002")
})