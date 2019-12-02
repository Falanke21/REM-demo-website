var express = require("express");
var router = express.Router();

// mongoose and mongo connection
const { mongoose } = require("../db/mongoose");

// import model
const { User } = require("../models/user");
const { Item } = require("../models/item");
const { Bidding } = require("../models/bidding");

/* 
    GET all biddings of a user. Sort by time.
*/
router.get("/", function(req, res, next) {
    const userId = req.session.user || req.body.userId;
    User.findById(userId)
        .then(user => {
            if (user === null) {
                res.status(404).send({
                    flag: false,
                    error: "Can't find this user"
                });
            } else {
                Bidding.find({ _id: { $in: user.biddings } }).then(biddings => {
                    // Sort by time
                    biddings.sort((a, b) => a.time < b.time);
                    res.send({ flag: true, biddings: biddings });
                });
            }
        })
        .catch(err => {
            res.status(500).send({ flag: false, error: err });
        });
});

/* 
    GET all biddings to an item.
*/
router.get("/item", function(req, res, next) {
    const itemId = req.body.itemId;
    Item.findById(itemId)
        .then(item => {
            if (item === null) {
                res.status(404).send({ flag: false, error: "can't find item" });
            } else {
                Bidding.find({ _id: { $in: item.biddings } }).then(biddings => {
                    res.send({ flag: true, biddings: biddings });
                });
            }
        })
        .catch(err => {
            res.status(500).send({ flag: false, error: err });
        });
});

/* 
    POST a bidding to an item.
*/
router.post("/", function(req, res, next) {
    const userId = req.session.user || req.body.userId;
    const itemId = req.body.itemId;
    const amount = req.body.amount;

    if (!userId || !itemId || !amount) {
        res.status(400).send({ flag: false });
    } else {
        Item.findById(itemId).then(item => {
            const bidding = new Bidding({
                item: itemId,
                buyer: userId,
                seller: item.seller,
                amount: amount
            });

            item.biddings.push(bidding._id);
            item.save();

            User.findById(userId, (_, user) => {
                user.biddings.push(bidding._id);
                user.save();
            });

            bidding
                .save()
                .then(result => {
                    res.send({ flag: true, bidding: result });
                })
                .catch(err => {
                    res.status(500).send({ flag: false, error: err });
                });
        });
    }
});

/* 
    PATCH a bidding to decline it.
*/
router.patch("/decline", function(req, res, next) {
    const biddingId = req.body.biddingId;

    Bidding.findById(biddingId)
        .then(bidding => {
            if (bidding === null) {
                res.status(404).send({ flag: false });
            } else {
                bidding.accepted = false;
                bidding.save().then(result => {
                    res.send({ flag: true, bidding: result });
                });
            }
        })
        .catch(err => {
            res.status(500).send({ flag: false, error: err });
        });
});

module.exports = router;
