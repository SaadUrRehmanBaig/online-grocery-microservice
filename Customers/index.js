const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
    res.send("Customer service up")
})

app.listen(3001, () => {
    console.log("Customer service runnig on port 3001")
})