const express = require('express');
const router = express.Router();

/*
 ES6 Arrow Function
 */
router.get('/', (req, res) => {
    res.send('Hey, some dashboards');
});


/*
 ES6 Arrow Function
 */
router.get('/sleep', (req, res) => {
    res.send('Hey, a sleep dashboard');
});

/*
 Regular Function Call
 */
router.get('/mood', function(req, res) {
    res.send('Hey, a mood dashboard.');
})

module.exports = router;