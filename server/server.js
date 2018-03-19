//Dependencies
const express = require('express')
, massive = require('massive')
, bodyParser = require('body-parser')
, nodemailer = require('nodemailer')
, cors = require('cors')
, dotenv = require('dotenv').config()
, session = require('express-session')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, axios = require('axios')

const app = express()

// Controllers
const controller = require('./controller/controller')
, auth_controller = require('./controller/auth_controller');

// Body-Parser and middleware
app.use(bodyParser.json())
var jsonParser = bodyParser.json;
app.use(cors())
// ---End middleware--- //



