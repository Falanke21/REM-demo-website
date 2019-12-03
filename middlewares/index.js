const { ObjectID } = require("mongodb");

const { User } = require("../models/user");

// I MIGHT OR MIGHT NOT NEED TO USE THIS :)
// Our own express middleware to check for
// an active user on the session cookie (indicating a logged in user.)
const sessionChecker = (req, res, next) => {
    if (req.session.user) {
        res.redirect("/market"); // redirect to dashboard if logged in.
    } else {
        next(); // next() moves on to the route.
    }
};

// authenticate if session is logged in
const authenticate = (req, res, next) => {
    if (req.session.user && ObjectID.isValid(req.session.user)) {
        const id = req.session.user;
        User.findById(id).then(user => {
            if (user) {
                next();
            } else {
                return Promise.reject();
            }
        })
        .catch(error => {
            res.status(401).send("Restricted access");
        })
    } else {
        res.status(401).send("Restricted access");
    }
};

const authenticateAdmin = (req, res, next) => {
    if (req.session.user === "admin") {
        next();
    } else {
        res.status(401).send("Restricted access");
    }
}

module.exports = { sessionChecker, authenticate, authenticateAdmin };
