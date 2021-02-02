const express = require('express'),
      app = express();

const apiRoute = require('./routes/api'),
      chartsRoute = require('./routes/charts'),
      dashboardsRoute = require('./routes/dashboards'),
      homeRoute = require('./routes/index'),
      reportsRoute = require('./routes/reports'),
      statsRoute = require('./routes/stats');

app.use('/', homeRoute);
app.use('/api', apiRoute);
app.use('/charts', chartsRoute);
app.use('/dashboards', dashboardsRoute);
app.use('/tests', homeRoute);
app.use('/reports', reportsRoute);
app.use('/stats', statsRoute);

app.listen(3000, () => {
    console.log('listening on 3000')
})
