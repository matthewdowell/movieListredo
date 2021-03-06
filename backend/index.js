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
  var { item, quantity } = req.body;
  db.query('INSERT INTO groceries VALUES (?, ?, ?, ?)', [null, item, quantity, 0], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(201)
    }
  })
})

app.put('/groceries', (req, res) => {
  var { id, purchased } = req.body;
  db.query('UPDATE groceries SET purchased = ? WHERE id = ?', [purchased, id], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(204);
    }
  })
})

app.delete('/groceries/:id', (req, res) => {
  var id = Number(req.params.id);
  db.query('DELETE FROM groceries WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(204);
    }
  })
})

app.listen('3000', () =>
  console.log('listening on 3000')
)