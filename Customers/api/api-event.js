const CustomerService = require("../services/customer-service")
module.exports = async (app) => {
    const service = new CustomerService()

    app.use("/app-event", (req, res, next) => {
        const { payload } = req.body;
        service.SubscribeEvents(payload);
        return res.status(200).send("you request has reach the customer service")
    })
}