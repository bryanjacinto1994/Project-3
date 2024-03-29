// Require Packages
const express = require("express");
const app = express();
const db = require("./models");
const routes = require("./routes");
const passport = require("passport");
const session = require("express-session")

const MySQLStore = require("express-mysql-session")(session);

let options = {};

require("./config/passport")(passport)

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
        database: 'tourdaze'
    }
}

let sessionStore = new MySQLStore(options);

// Pass in mysql session store
app.use(session({
    key: 'surfing_dogs',
    secret: 'surfing_dogs',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

// app.use(morgan('common'))

// THIS IS REALLY IMPORTANT FOR ROUTING CLIENT SIDE
// We want to have our app to use the build directory 
app.use(express.static(__dirname + '/client/build'))

// For every url request we send our index.html file to the route
app.use(routes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('/*', (req, res) => {
        res.sendFile(
            path.resolve(__dirname, 'client', 'build', 'index.html')
        );
    });
}
// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });



db.sequelize.sync({ force: false }).then(() => {
    let server = app.listen(process.env.PORT || 5000, function () {
        let port = server.address().port;
        console.log(`Server is listening on PORT ${port}`)
    })
})