/* Item model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')

const { User } = require("./user");

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const ItemSchema = new mongoose.Schema({
	img: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
		trim: true,
	},
	author: { // Well, owner
		type: mongoose.Schema.Types.ObjectId, 
		ref: "User",
		required: true
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
		required: true,
		min: 0
	}, 
	soldAt: {
		type: Number,
		default: null
	},
	location: {
		type: String,
		trim: true,
	},
	biddings: [{
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Bidding",
	}]
})

// make a model using the Item schema
const Item = mongoose.model('Item', ItemSchema)
module.exports = { Item }

