/* Transaction model */
"use strict";

const mongoose = require("mongoose");
const validator = require("validator");

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const TransactionSchema = new mongoose.Schema({
    itemId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Item",
		required: true
	},
	seller: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	buyer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	finalPrice: {
		type: Number,
		required: true
	},
	time: {
		type: Date,
		required: true,
		default: new Date()
	}
});

// make a model using the Transaction schema
const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = { Transaction };
