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
, auth_controller = require('./controller/auth_controller')
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

//Auth0 Strategy
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: process.env.CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');

    let { displayName, user_id, email } = profile
    db.find_user([user_id]).then((users) => {
        if (!users[0]) {
            db.create_user([
                displayName,
                email,
                user_id,
            ]).then(user => {

                return done(null, user[0].id)
            })
        } else {
            return done(null, users[0].id)
        }
    })

}))
//---End Strategy---//

///////////////////
//// EndPoints ////
///////////////////

//Auth endpoints
app.get('/auth/login', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.REACT_APP_REDIRECT,
    failureRedirect: process.env.REACT_APP_REDIRECT
}))
app.get('/auth/me', (req, res) => {
    if (!req.user) {
        res.status(404).send('User not found');
    } else {
        res.status(200).send(req.user.admin)
    }
})
// app.post('/auth/logout', authController.logout);
app.get('/auth/logout', auth_controller.logout)


/////////////////////
////End endpoints////
/////////////////////

app.listen(process.env.SERVER_PORT, () => {
    console.log(`I'm listening on port: ${process.env.SERVER_PORT}.`)
})
