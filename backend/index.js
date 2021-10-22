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

app.post('/groceries', (req, res) => {
  console.log(req.body);
  var { item, quantity } = req.body;
  db.query('INSERT INTO groceries VALUES (?, ?, ?, ?)', [null, item, quantity, 0], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(201)
    }
  })
})

app.listen('3000', () =>
  console.log('listening on 3000')
)