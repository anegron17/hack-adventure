var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const context = {
    title: 'Profile',
    name: 'Ariana',
    age: '14',
    position: 'Student',
    hobbies: ['soccer', 'volleyball', 'piano', 'trompeta', 'videojuegos', 'arte'],
  }
    res.render('profile', context);
});

module.exports = router;
