var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

router.get("/best", function (req, res, next) {
    res.send("best");
});

module.exports = router;
