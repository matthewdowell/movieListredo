const path = require('path');
const express = require('express');
const db = require('../database');

var app = express();

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '..', 'frontend', 'dist')));

app.get('/groceries', (req, res) => {
  db.query('select * from groceries', (err, results) => {
    if (err) {
      console.log('get err: ', err);
    } else {
      res.statusCode = 200;
      res.send(results);
    }
  })
})

app.listen('3000', () =>
  console.log('listening on 3000')
)