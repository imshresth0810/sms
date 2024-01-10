const mongoose = require("mongoose");
require('dotenv').config()
// const mongostr = "mongodb://localhost:27017/SMS";
const mongostr = process.env.MONGO_STR2;

const connectToMongo = () => {
    mongoose
        .connect(mongostr, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(console.log("Connected to MongoDB"))
        .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))
}

module.exports = connectToMongo;