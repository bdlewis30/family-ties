require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive');

const {
    AUTH_DOMAIN,
    AUTH_CLIENT_ID,
    AUTH_CLIENT_SECRET,
    AUTH_CALLBACK_URL,
    CONNECTION_STRING,
    SERVER_PORT
} = process.env

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
})

passport.use(new Auth0Strategy({
    domain: AUTH_DOMAIN,
    clientID: AUTH_CLIENT_ID,
    clientSecret: AUTH_CLIENT_SECRET,
    callbackURL: AUTH_CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    console.log(profile);
    let { displayName, picture, auth_id } = profile;
    const db = app.get('db');
    db.users.find_user([auth_id]).then(function (user) {
        if (!user[0]) {
            db.users.create_user([
                displayName,
                picture,
                auth_id
            ]).then(user => {
                return done(null, user[0].id)
            })
        }
        else {
            return done(null, user[0].id)
        }
    })
}))


app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.SUCCESSREDIRECT,
    failureRedirect: process.env.FAILUREREDIRECT
}))

passport.serializeUser((id, done) => {
    return done(null, id)
})

passport.deserializeUser((id, done) => {
    app.get('db').users.find_session_user([id])
        .then(function (user) {
            return done(null, user[0])
        })
})

app.get('/auth/me', (req, res) => {
    if (!req.user) {
        res.status(404).send('User not found.');
    }
    else {
        res.status(200).send(req.user);
    }
})

app.get('auth/logout', function (req, res) {
    req.logOut();
    res.redirect('/')
})

let router = require('./apis')
app.use('/api', router)

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
});
