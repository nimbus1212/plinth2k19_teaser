var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req, res, next) {
    res.render('index');
  
});

router.get('/contact',function(req, res, next) {
    res.render('contact');
  
});

router.get('/archive',function(req, res, next) {
    res.render('archive');
  
});

router.get('/ca',function(req, res, next) {
    res.render('ca');
  
});

module.exports = router;