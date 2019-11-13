const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const db = require('./models');
const routes = require('./routes');

const MySQLStore = require('express-mysql-session')(session);

let options = {};
let sessionStore = new MySQLStore(options);

require('./config/passport')(passport);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    options = {
        host: process.env.HOST,
        port: 3306,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB
    }
} else {
    options = {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: "Lost4815162342",
        database: 'tracker'
    }
}

app.use(session({
    key: 'tourdaze',
    secret: 'tourdaze',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}))