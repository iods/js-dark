
const express = require('express'),
      path = require('path'),
      app = express();


const exercisesRoute = require('./routes/exercises'),
      homeRoute = require('./routes/index');


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.use('/', homeRoute);
app.use('/exercises', exercisesRoute)


app.listen(3000, () => {
    console.log('listening on 3000')
})