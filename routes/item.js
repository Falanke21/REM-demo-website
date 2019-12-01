var express = require("express");
var router = express.Router();

// mongoose and mongo connection
const { mongoose } = require("../db/mongoose");

// import model
const { User } = require("../models/user");
const { Item } = require("../models/item");

var multer = require("multer");
const uuidv1 = require("uuid/v1");

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
            res.status(400).send({ flag: false, error: err });
            return;
        }
        const seller = req.body.seller;
        const title = req.body.title;
        const description = req.body.description;
        const price = req.body.price;
        const location = req.body.location;
        // Everything went fine.

        User.findById(seller)
            .then(user => {
                console.log(`Seller is: ${seller}`);
            })
            .catch(err => {
                console.log(`Can't find user ${seller}`);
                res.status(404).send({
                    flag: false,
                    error: "Can't find seller"
                });
            });

        const item = new Item({
            img: req.file.destination + "/" + req.file.filename,
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
    GET all items that are available in the market.
*/
router.get("/", function(req, res, next) {
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
router.get("/", function(req, res, next) {
    Item.find()
        .then(result => {
            res.send({ flag: true, items: result });
        })
        .catch(err => {
            res.status(500).send();
        });
});

module.exports = router;
