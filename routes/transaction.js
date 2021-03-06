var express = require("express");
var router = express.Router();
const { ObjectID } = require("mongodb");

const { Transaction } = require("../models/transaction");
const { Item } = require("../models/item");
const { Bidding } = require("../models/bidding");
const { User } = require("../models/user");
const { authenticateAdmin } = require("../middlewares");

// get all transactions ADMIN only
router.get("/", authenticateAdmin, function(req, res, next) {
    Transaction.find()
        .then(result => {
            res.send({ transactions: result });
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

// get one transaction
router.get("/:id", function(req, res, next) {
    const transactionId = req.params.id;
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

// update a transaction ADMIN only
router.patch("/:id", authenticateAdmin, function(req, res, next) {
    const id = req.params.id;
    const { finalPrice } = req.body;
    const body = { finalPrice };
    if (!ObjectID.isValid(id)) {
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

// delete a transaction ADMIN only
router.delete("/:id", authenticateAdmin, function(req, res, next) {
    const id = req.params.id;
    console.log(id);
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    let deleted = null;
    Transaction.findByIdAndRemove(id)
        .then(transaction => {
            if (transaction) {
                deleted = transaction;
                return transaction.bidding;
            } else {
                res.status(404).send();
            }
        })
        .then(biddingId => {
            if (biddingId) {
                return Bidding.findById(biddingId);
            } else {
                res.status(404).send();
            }
        })
        .then(bidding => {
            if (bidding) {
                bidding.transaction = null;
                bidding.accepted = null;
                return bidding.save();
            } else {
                res.status(404).send();
            }
        })
        .then(bidding => {
            if (bidding && bidding.item) {
                return Item.findById(bidding.item);
            } else {
                res.status(404).send();
            }
        })
        .then(item => {
            if (item) {
                item.inMarket = true;
                return item.save();
            } else {
                res.status(404).send();
            }
        })
        .then(item => {
            if (item) {
                res.send(deleted);
            } else {
                res.status(404).send();
            }
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

module.exports = router;
