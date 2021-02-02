const express = require('express');
const app = express();
const router = express.Router();

const homeRoute = require('./routes/index');

router.get('/home', (req, res) => {
    res.send('Hey, this is the home router.');
});

router.get('/basics', (req, res) => {
    res.send('Hey, some JS basics.');
})

router.get('/test', (req, res) => {
    res.send('hey, this is a test.');
})

app.use('/', homeRoute)

app.listen(8080, function () {})