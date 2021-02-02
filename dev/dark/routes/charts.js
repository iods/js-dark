const express = require('express'),
      router = express.Router();

router.get('/', (req, res) => {
    res.render('charts/charts', { info: "How about some charts to display?"});
})

module.exports = router;