const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

//app middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 8070;

//To accept the JSON Data
app.use(express.json());

const URL = process.env.MONGODB_URL;
process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';

mongoose.connect(URL, {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
console.log("Mongodb connection success!!!");
})

// @import routes
const courseRouter = require("./routes/SS_routes/courses");

//@routes use
app.use("/course",courseRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
});
