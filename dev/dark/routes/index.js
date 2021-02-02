const express = require('express');
const router = express.Router();

// not ES6 w/ the => arrow function replacing `function()`
router.get('/', function(req, res) {
    res.send('yo, this is the god damn index.');
})

/*
 ES6 Arrow Function
 */
router.get('/home', (req, res) => {
    res.send('Hey, this is the home page, it will just have a description of the eddie CLI and links to my github and linked in.');
});

// ES6 arrow function
router.get('/test', (req, res) => {
    res.send('Yo, this is the test page.')
})

/*
 Regular Function Call
 */
router.get('/tests', function(req, res) {
    res.send('Hey, this is a tests page router again.');
})

module.exports = router;