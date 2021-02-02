const express = require('express');
const router = express.Router();


/*
 ES6 Arrow Function
 */
router.get('/', (req, res) => {
    res.render('api/api');
});

/*
 ES6 Arrow Function
 */
router.get('/tests', (req, res) => {
    res.render('api/tests');
});


module.exports = router;