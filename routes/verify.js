var express = require("express");
var router = express.Router();

// check if cookie is valid
router.get("/", function(req, res, next) {
    const user = req.session.user;
    console.log(`Retreived session data: ${req.session.user}`);
    if (user) {
        console.log(`Verified user ${user} cookie`);
        res.send({ user });
    } else {
        res.status(401).send(error);
    }
});

module.exports = router;