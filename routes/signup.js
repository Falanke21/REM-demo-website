var express = require('express');
var router = express.Router();

// mongoose and mongo connection
const { mongoose } = require('../db/mongoose')

// import model
const { User } = require('../models/user')

/* GET home page. */
router.post('/', function(req, res, next) {
  // Create a new user
	const user = new User({
		email: req.body.email,
		password: req.body.password
	})

	// Save the user
	user.save().then((user) => {
		res.send(user)
	}, (error) => {
		res.status(400).send(error) // 400 for bad request
	})
});

module.exports = router;
