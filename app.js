var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require('express-session')

const { authenticate } = require("./middlewares");
var exampleRouter = require("./routes/example");
const userRouter = require("./routes/user");
const itemRouter = require("./routes/item");
const biddingRouter = require("./routes/bidding");
const transactionRouter = require("./routes/transaction");
const settingRouter = require("./routes/setting");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var cors = require('cors')
// TODO
// THIS NEEDS TO BE REMOVED WHEN DEPLOYING !!!!!!!!!!!!!!
// Enable All CORS Requests (Development)
app.use(cors())

/*** Session handling **************************************/
// Create a session cookie
app.use(session({
    secret: 'Mark Kazakevich', // :)
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000,  // ten minute
        httpOnly: true
    }
}));

// TODO: uncomment when in production
// match all routes except for path contains "login" or "signup"
// app.all(/^((?!login|signup).)*$/, authenticate);

// EXAMPLES
app.use("/example", exampleRouter);

/*
    ALL JSON APIs goes to routes directory
    ALL HTML file routes stay in this file
*/

// serve static files
app.use('/static', express.static('public'))

// REAL JSON APIs
const routes = ["/api/user", "/api/item", "/api/bidding", "/api/setting", "/api/transaction"];
app.use(routes, authenticate);
app.use("/api/user", userRouter);
app.use("/api/item", itemRouter);
app.use("/api/bidding", biddingRouter);
app.use("/api/setting", settingRouter);
app.use("/api/transaction", transactionRouter);

/*** Webpage routes below **********************************/
// Serve the build (production)
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
    console.error(err);
    res.send(err)
});

module.exports = app;
