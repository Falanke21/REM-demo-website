/* Bidding model */
"use strict";

const mongoose = require("mongoose");
const validator = require("validator");

const { User } = require("./user");

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const BiddingSchema = new mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    amount: {
        // how much this buyer bid
        type: Number,
        required: true,
        min: 0
	},
	accepted: {
		type: Boolean,
		default: null
	},
	time: {
		type: Date,
		default: new Date()
	}
});

// make a model using the Bidding schema
const Bidding = mongoose.model("Bidding", BiddingSchema);
module.exports = { Bidding };
