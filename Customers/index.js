const express = require("express");
const { PORT } = require("./config")
const { databaseConnection } = require('./database')


const startCustomerService = async () => {
    const app = express();
    await databaseConnection();
    await require("./express-app")(app)
    app.listen(PORT, () => {
        console.log("Customer Service listening on PORT", PORT)
    })
}

startCustomerService()