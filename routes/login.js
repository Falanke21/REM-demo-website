var express = require('express');
var router = express.Router();

// mongoose and mongo connection
const { mongoose } = require('../db/mongoose')

// import model
const { User } = require('../models/user')

/* POST to login on /api/login */
router.post('/', function(req, res, next) {
	const email = req.body.email
	const password = req.body.password
	
	User.findByEmailPassword(email, password).then((user) => {
	    if (!user) {
	    	console.log('User not found');
            res.status(404).send({auth: false});
        } else {
            // Add the user's id to the session cookie.
            // We can check later if this exists to ensure we are logged in.
            console.log(`user with email ${email} to SESSION!`)
            req.session.user = user._id;
            res.send({auth: true});
        }
    }).catch((error) => {
    	console.log(400)
		res.status(400).send({auth: false, error: error});
    })
});

module.exports = router;
