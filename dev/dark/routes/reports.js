const express = require('express');
const router = express.Router();

/*
 ES6 Arrow Function
 */
router.get('/', (req, res) => {
    res.send('reports page, for creating reports.');
});

module.exports = router;