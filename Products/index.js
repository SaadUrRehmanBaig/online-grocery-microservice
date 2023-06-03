const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
    res.send("Product service up")
})

app.listen(3002, () => {
    console.log("Product service runnig on port 3002")
})