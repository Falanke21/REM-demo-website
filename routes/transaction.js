var express = require("express");
var router = express.Router();

const { Transaction } = require("../models/transaction");
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
