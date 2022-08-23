const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
    "mongodb+srv://admin:perscholas16@cluster0.uoephg3.mongodb.net/?retryWrites=true&w=majority"
    ).then(() => console.log("connected to the Database"))
        .then(() => {
            app.listen(5000)
        }).catch((err) => console.log(err))

