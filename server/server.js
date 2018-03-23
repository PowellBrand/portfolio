//Dependencies
const express = require('express')
, massive = require('massive')
, bodyParser = require('body-parser')
, nodemailer = require('nodemailer')
, cors = require('cors')
, dotenv = require('dotenv').config()
, session = require('express-session')
, passport = require('passport')
, axios = require('axios')

const app = express()

// Controllers
const controller = require('./controller/controller')
, mail_controller = require('./controller/mail_controller');

// Body-Parser and middleware
app.use(bodyParser.json())
var jsonParser = bodyParser.json;
app.use(cors())
// ---End middleware--- //

//Set up session and passport.
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
//--End session and passpot setup--//


///////////////////
//// EndPoints ////
///////////////////

//Send Email
app.post('/contact/send', mail_controller.sendEmail)


/////////////////////
////End endpoints////
/////////////////////

app.listen(process.env.SERVER_PORT, () => {
    console.log(`I'm listening on port: ${process.env.SERVER_PORT}.`)
})
