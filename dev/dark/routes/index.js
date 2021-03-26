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

router.get('/test', (req, res) => {
    res.send('Yo, this is the test page.')
})

router.get('/tests', function(req, res) {
    res.send('Hey, this is a tests page router again.');
})

module.exports = router;