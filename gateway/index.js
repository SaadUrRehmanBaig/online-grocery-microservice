const express = require("express");
const proxy = require("express-http-proxy");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors())

app.use("/customer", proxy("http://localhost:3001"));
app.use("/products", proxy("http://localhost:3002")); // products
app.use("/shopping", proxy("http://localhost:3003"));
app.use("*", (req, res) => {
    res.send("hi from gateway")
})


app.listen(3000, () => {
    console.clear()
    console.log("gateway listening on port 3000")
})