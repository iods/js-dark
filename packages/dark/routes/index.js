
const express = require('express'),
    router = express.Router();


router.get('/', function(req, res) {
    res.render('default/index', {
        title: "DarkJS",
        header: "Welcome"
    })
})

router.get('/home', (req, res) => {
    res.send('Hey, this is the home page, it will just have a description of the eddie CLI and links to my github and linked in.');
});

module.exports = router;