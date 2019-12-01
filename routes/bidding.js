var express = require("express");
var router = express.Router();

// mongoose and mongo connection
const { mongoose } = require("../db/mongoose");

// import model
const { User } = require("../models/user");
const { Item } = require("../models/item");
const { Bidding } = require("../models/bidding");

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

module.exports = router;
