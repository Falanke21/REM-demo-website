var express = require("express");
var router = express.Router();

const { Transaction } = require("../models/transaction");
const { Item } = require("../models/item");
const { Bidding } = require("../models/bidding");
const { User } = require("../models/user");
const { ObjectID } = require("mongodb");

// get all transactions
router.get("/", function(req, res, next) {
    Transaction.find()
        .then(result => {
            res.send({ transactions: result });
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

// get one transaction
router.get("/one", function(req, res, next) {
    const transactionId = req.body.transactionId;
    Transaction.findById(transactionId)
        .then(transaction => {
            if (transaction === null) {
                res.status(404).send({
                    flag: false,
                    error: "transaction not found"
                });
            } else {
                result = { transaction: transaction };
                // Get bidding info
                Bidding.findById(transaction.bidding).then(bidding => {
                    result.bidding = bidding;
                    // Item info
                    Item.findById(result.bidding.item).then(item => {
                        result.item = item;
                        User.findById(result.bidding.seller)
                            .select("-password")
                            .then(seller => {
                                result.seller = seller;
                                User.findById(result.bidding.buyer)
                                    .select("-password")
                                    .then(buyer => {
                                        result.buyer = buyer;
                                        res.send({
                                            flag: true,
                                            result: result
                                        });
                                    });
                            });
                    });
                });
            }
        })
        .catch(err => {
            res.status(500).send({ flag: false, error: err });
        });
});

// update a transaction
router.patch("/:id", function(req, res, next) {
    const id = req.params.id;
    const { bidding, finalPrice, time } = req.body;
    const body = { bidding, finalPrice, time };
    if (!ObjectID.isValid(id) || !ObjectID.isValid(bidding)) {
        res.status(404).send();
    }
    Transaction.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then(transaction => {
            if (transaction) {
                res.send(transaction);
            } else {
                res.status(404).send();
            }
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

// delete a transaction
router.delete("/:id", function(req, res, next) {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    Transaction.findByIdAndRemove(id)
        .then(transaction => {
            if (transaction) {
                res.send(transaction);
            } else {
                res.status(404).send();
            }
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

module.exports = router;
