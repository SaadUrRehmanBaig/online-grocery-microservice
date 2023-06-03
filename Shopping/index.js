const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
    res.send("Shopping service up")
})

app.listen(3003, () => {
    console.log("Shopping service runnig on port 3003")
})