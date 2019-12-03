var express = require("express");
var router = express.Router();
const { ObjectID } = require("mongodb");
var multer = require("multer");
const uuidv1 = require("uuid/v1");

// import model
const { User } = require("../models/user");
const { Item } = require("../models/item");
const { authenticateAdmin } = require("../middlewares");

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "public/images");
    },
    filename: function(req, file, callback) {
        // TODO: ADD MORE FILE TYPE HERE !!!!!
        if (file.mimetype.includes("jpeg") || file.mimetype.includes("jpg")) {
            callback(null, uuidv1() + "." + "jpg");
        } else if (file.mimetype.includes("png")) {
            callback(null, uuidv1() + "." + "png");
        } else {
            console.log(`File ${file.originalname} doesn't have a normal type`);
            callback(null, uuidv1());
        }
    }
});

var upload = multer({ storage: storage }).single("uploadPicture");

/* 
    POST a item into the database
*/
router.post("/", function(req, res, next) {
    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            res.status(500).send({ flag: false, error: err });
            return;
        } else if (err) {
            // An unknown error occurred when uploading.
            res.status(500).send({ flag: false, error: err });
            return;
        }
        const seller = req.session.user || req.body.seller;
        const title = req.body.title;
        const description = req.body.description;
        const price = req.body.price;
        const location = req.body.location;
        // Everything went fine.

        User.findById(seller)
            .then(user => {
                console.log(`Seller is: ${user}`);
                if (user === null) {
                    res.status(404).send({ flag: false });
                    return;
                }
            })
            .catch(err => {
                res.status(500).send(err);
            });

        const item = new Item({
            img: "static/images/" + req.file.filename,
            title: title,
            seller: seller,
            price: price,
            description: description,
            location: location
        });

        item.save()
            .then(result => {
                User.findById(seller).then(user => {
                    user.sellings.push(result._id);
                    user.save();
                    res.send({ flag: true, item: result });
                });
            })
            .catch(err => {
                res.status(400).send({ flag: false, error: err });
            });
    });
});

/* 
    GET all item that are available in the market.
*/
router.get("/all", function(req, res) {
    Item.find({ inMarket: true })
        .then(result => {
            res.send({ flag: true, items: result });
        })
        .catch(err => {
            res.status(500).send();
        });
});

/*
    GET all items that are in database, THIS IS FOR ADMIN USE
*/
router.get("/admin", authenticateAdmin, function(req, res, next) {
    Item.find()
        .then(result => {
            res.send({ flag: true, items: result });
        })
        .catch(err => {
            res.status(500).send();
        });
});

/* 
    GET one item in the market.
*/
router.get("/:id", function(req, res, next) {
    const itemId = req.params.id;
    Item.findOne({ inMarket: true, _id: itemId })
        .then(result => {
            res.send({ flag: true, item: result });
        })
        .catch(err => {
            res.status(500).send();
        });
});

/*
    DELETE an item ADMIN only
*/
router.delete("/", authenticateAdmin, function(req, res, next) {
    Item.findByIdAndDelete(req.body.itemId).then(result => {
        res.send({ flag: true, items: result });
        User.findById(result.seller, (err, user) => {
            user.sellings.filter(x => x !== result._id);
            user.save();
        }).catch(err => {
            res.status(500).send({ flag: false, error: err });
        });
    });
});

/*
    PATCH an item ADMIN only
*/
router.patch("/", authenticateAdmin, function(req, res, next) {
    const itemId = req.body.itemId;
    const { title, price, description, location } = req.body;
    const body = { title, price, description, location };
    if (!ObjectID.isValid(itemId)) {
        res.status(404).send();
    }
    Item.findByIdAndUpdate(itemId, { $set: body }, { new: true })
        .then(item => {
            if (item) {
                res.send(item);
            } else {
                res.status(404).send();
            }
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

module.exports = router;
