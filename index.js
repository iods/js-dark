// Run a iods server.

const express = require('express');
const index   = express();

index.get('/', (req, res) => res.send('DRK Commerce'));

index.listen(3000, ()=> {
    console.log('Iods (DRK Commerce) API.');
})