const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MogoDB"))
    .catch(err => console.log("There is an error:", err));

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.get("/", (req,res) => {
    res.json({
        message : "The Backend is working!"
    });
})


app.listen(8800, () => {
    console.log("Hello World")
})

