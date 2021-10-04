// Npm packages
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.set("view engine", "ejs");

// Database connection
// mongoose.connect('mongodb://localhost:27017/toDoList', {useNewUrlParser: true, useUnifiedTopology: true});

// Serve static files css, html etc
app.use(express.static("public"));


// Middleware for forms
app.use(express.urlencoded({extended: true})); 
app.use(express.json());


// Twilio credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = require('twilio')(accountSid, authToken);

// Routes
app.get('/', (req, res) => {
    res.render('index', {foo: 'FOO'});
  });

app.listen("3000", () => {
    console.log("Listening on port 3000");
});