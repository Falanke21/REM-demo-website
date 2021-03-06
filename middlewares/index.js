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
const excludeRoutes = ["/login", "/signup"];
const authenticate = (req, res, next) => {
    const user = req.session.user;
    const match = excludeRoutes.filter(r => r === req.path);
    if (match.length > 0) {
        console.log("Excluded route");
        next();
    } else if (user && user === "admin") {
        next();
    } else if (user && ObjectID.isValid(user)) {
        const id = user;
        User.findById(id)
            .then(user => {
                if (user) {
                    next();
                } else {
                    return Promise.reject();
                }
            })
            .catch(error => {
                res.status(401).send("Restricted access");
            });
    } else {
        res.status(401).send("Restricted access");
    }
};

const authenticateAdmin = (req, res, next) => {
    console.log(`Authenticating admin, get: ${req.session.user}`);
    if (req.session.user === "admin") {
        next();
    } else {
        res.status(401).send("Restricted access");
    }
}

module.exports = { sessionChecker, authenticate, authenticateAdmin };
