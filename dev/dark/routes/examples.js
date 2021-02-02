const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('examples/index', {
        title: "Examples of some JS",
        two: "Secondary Title"
    });
})

module.exports = router;