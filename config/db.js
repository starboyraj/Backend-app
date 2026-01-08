const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/testdb")
        console.log("Mongodb Connected");
    } catch(error) {
        console.log("Mongodb connection failure");
        process.exit(1);
    };
};

module.exports = connectDB;