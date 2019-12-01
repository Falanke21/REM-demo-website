var express = require("express");
var router = express.Router();

// import model
const { User } = require("../models/user");

/* POST to login on /api/user/login */
router.post("/login", function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // examine admin condition? TODO: discuss about this
    if (email === "admin" && password === "admin") {
        req.session.user = "admin";
        res.send({ user: "admin", admin: true });
    } else {
        User.findByEmailPassword(email, password)
            .then(user => {
                if (!user) {
                    console.log("User not found");
                    res.status(404).send({ auth: false });
                } else {
                    // Add the user's id to the session cookie.
                    // We can check later if this exists to ensure we are logged in.
                    console.log(`user with email ${email} to SESSION!`);
                    req.session.user = user._id;
                    res.send({ user: user._id, admin: false });
                }
            })
            .catch(error => {
                res.status(400).send({ error });
            });
    }
});

/* POST to create a new user on /api/signup */
router.post("/signup", function(req, res, next) {
    // Create a new user
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    // Save the user
    user.save().then(
        user => {
            req.session.user = user._id;
            res.send({ user: user._id, admin: false });
        },
        error => {
            res.status(400).send({ error }); // 400 for bad request
        }
    );
});

// logout on /api/user/logout
router.get("/logout", function(req, res, next) {
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send();
        }
    });
});

// check if cookie is valid
router.get("/verify", function(req, res, next) {
    const user = req.session.user;
    if (user) {
        res.send({ user });
    } else {
        res.status(401).send();
    }
});

module.exports = router;
