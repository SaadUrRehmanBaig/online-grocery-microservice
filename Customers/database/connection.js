const mongoose = require("mongoose");

const { DB_URL } = require("../config");

async function DBConnect() {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Db Connected');
    } catch (error) {
        console.log("error connecting with DB")
        console.log(error)
        process.exit(1)
    }
}

module.exports = DBConnect