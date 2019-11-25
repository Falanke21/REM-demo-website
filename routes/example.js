var express = require("express");
var router = express.Router();

/* GET expamle listing.
  use postman, send a get request to http://localhost/example
*/
router.get("/", function(req, res, next) {
    res.send("What's up motherfxxkers");
});

module.exports = router;
