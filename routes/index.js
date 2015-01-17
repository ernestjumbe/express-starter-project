var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	now = new Date();
	console.log('now: ' + now);
  res.render('index', { title: 'Express', now: 'now'  });
});

module.exports = router;
