var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //TODO: Get any existing messages from DB and send to index
  res.send('this is home');
});

module.exports = router;
