var express = require('express');
var router = express.Router();
const { mongoose } = require('../db/mongoose');

// import model
const { User } = require('../models/user');
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

var update = multer({ storage: storage }).single("uploadPicture");
/* POST to login on /api/setting */
router.patch("/", function(req, res, next) {
    update(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            res.status(500).send({ flag: false, error: err });
            return;
        } else if (err) {
            // An unknown error occurred when uploading.
            res.status(400).send({ flag: false, error: err });
            return;
        }
        const newPassword = req.body.password;
        const confirmPassword = req.body.confirmPassword;
        const user = req.session.user || req.body.user;
        // Everything went fine.
        User.findById(user)
            .then(userFromDataBase => {
                if (userFromDataBase === null) {
                    res.status(404).send({ flag: false });
                    return;
                }
                else{
                    if(req.file){
                        const img = req.file.destination + "/" + req.file.filename
                        userFromDataBase.profilePicture = img;
                    }
                    userFromDataBase.password = newPassword;
                    userFromDataBase.save().then(updateUser => {
                        console.log(`New user is ${updateUser}`)
                        res.send(updateUser);
                    }) .catch( err => {
                        res.status(400).send()
                    })
                }
            })
            .catch(err => {
                res.status(500).send(err);
            });
    });
});

module.exports = router;