const express = require('express'),
      path = require('path'),
      app = express();


const apiRoute = require('./routes/api'),
      chartsRoute = require('./routes/charts'),
      dashboardsRoute = require('./routes/dashboards'),
      exampleRoute = require('./routes/examples'),
      homeRoute = require('./routes/index'),
      reportsRoute = require('./routes/reports'),
      statsRoute = require('./routes/stats');


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.use('/', homeRoute);
app.use('/api', apiRoute);
app.use('/charts', chartsRoute);
app.use('/dashboards', dashboardsRoute);
app.use('/examples', exampleRoute);
app.use('/tests', homeRoute);
app.use('/reports', reportsRoute);
app.use('/stats', statsRoute);


app.listen(3000, () => {
    console.log('listening on 3000')
})
