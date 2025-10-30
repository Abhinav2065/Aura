const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoutes = require("./routes/auth")
const cors = require("cors")

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MogoDB"))
    .catch(err => console.log("There is an error:", err));

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());


app.get("/", (req,res) => {
    res.json({
        message : "The Backend is working!"
    });
})


app.listen(8800, () => {
    console.log("Hello World")
})

app.use("/api/auth" , authRoutes);