const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const router = require("./routes/book-routes")
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());

app.use("/books", router)



mongoose.connect(
    "mongodb+srv://admin:perscholas16@cluster0.uoephg3.mongodb.net/?retryWrites=true&w=majority"
    ).then(() => console.log("connected to the Database"))
        .then(() => {
            app.listen(`${PORT}`)
        }).catch((err) => console.log(err))

