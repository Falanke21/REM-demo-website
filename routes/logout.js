var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send();
        }
    });
});

module.exports = router;