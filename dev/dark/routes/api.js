const express = require('express');
const router = express.Router();


/*
 ES6 Arrow Function
 */
router.get('/', (req, res) => {
    res.send('api page, for running reports.');
});

/*
 ES6 Arrow Function
 */
router.get('/tests', (req, res) => {
    res.send('api tests page, for running tests.');
});


module.exports = router;