const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();


app.get(express.json());
app.use("/api/users", userRoutes)


app.get("/", (req,res) => {
    res.send("server is running")
});


app.listen(5000, () => {
    console.log("server running on port")
});