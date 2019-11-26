var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var exampleRouter = require("./routes/example");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");

// import express cookie session
const session = require('express-session')

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*** Session handling **************************************/
// Create a session cookie
app.use(session({
    secret: 'Mark Kazakevich', // :)
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60000,  // one minute  // this might need to be changed to "maxAge"
        httpOnly: true
    }
}));

// I MIGHT OR MIGHT NOT NEED TO USE THIS :)
// Our own express middleware to check for 
// an active user on the session cookie (indicating a logged in user.)
const sessionChecker = (req, res, next) => {
    if (req.session.user) {
        res.redirect('/market'); // redirect to dashboard if logged in.
    } else {
        next(); // next() moves on to the route.
    }    
};

// EXAMPLES
app.use("/example", exampleRouter);

/*
    ALL JSON APIs goes to routes directory
    ALL HTML file routes stay in this file
*/

// REAL JSON APIs
app.use("/api/signup", signupRouter);
app.use("/api/login", loginRouter);

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/fgnb/build"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/fgnb/build/index.html');
});

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    res.sendFile(__dirname + '/fgnb/build/index.html');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
