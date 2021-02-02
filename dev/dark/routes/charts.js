const express = require('express'),
      router = express.Router();

router.get('/', (req, res) => {
    res.send('How about some charts to display?');
})

module.exports = router;