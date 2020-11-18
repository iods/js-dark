const express = require('express');
const app = express();

app.get('/', (req, res) =>
    res.json({
        name: "Rye Miller",
        project: "Dark JS - A Platform Love Affair.",
        version: "0.1.0"
    })
);

app.listen(3000, ()=> {
    console.log('Iods (DRK Commerce) API.');
})