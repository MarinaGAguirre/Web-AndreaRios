var express = require('express');
var router = express.Router();

/* GET webDevelopment page. */
router.get('/', function(req, res, next) {
  res.render('peeling');
});

module.exports = router;