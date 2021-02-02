const express = require('express');
const router = express.Router();

/*
 ES6 Arrow Function
 */
router.get('/', (req, res) => {
    res.send('stats page, for showing stats.');
});

module.exports = router;