var express = require('express');
var router = express.Router();

// import model
const { User } = require('../models/user')

/* POST to login on /api/login */
router.post('/', function(req, res, next) {
	const email = req.body.email
    const password = req.body.password
    
    // examine admin condition? TODO: discuss about this
    if (email === "admin" && password === "admin") {
        req.session.user = "admin";
        res.send({ user: "admin", admin: true });
    }

	
	User.findByEmailPassword(email, password).then((user) => {
	    if (!user) {
	    	console.log('User not found');
            res.status(404).send({auth: false});
        } else {
            // Add the user's id to the session cookie.
            // We can check later if this exists to ensure we are logged in.
            console.log(`user with email ${email} to SESSION!`)
            req.session.user = user._id;
            res.send({ user: user._id, admin: false });
        }
    }).catch((error) => {
    	console.log(400)
		res.status(400).send({ error });
    })
});

module.exports = router;
