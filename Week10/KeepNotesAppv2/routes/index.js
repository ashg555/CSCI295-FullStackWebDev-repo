var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var notes = loadJSON().then(function(result) {
  return result;
});

/* GET login page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Login' });
});

/* GET view page. */
router.get('/view', function(req, res, next) {
  res.render('view', { title: 'Your Notes', notes: notes });
});

/* GET add page. */
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Add a Note', notes: notes });
});

/* POST add page. */
router.post('/add', function(req, res, next) {
  var note = {
    id: notes.length + 1,
    title: req.body.title, 
    body: req.body.body,
    color: req.body.color,
    starred: req.body.starred,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  var jsonNote = JSON.stringify(note);

  notes.push(jsonNote);

  res.render('add', { title: 'Add Another Note', notes: notes });
});

module.exports = router;


async function loadJSON() {
  var filePath = path.join(__dirname, '../public/notes.json');
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      notes = JSON.parse(data);
    }
  });
  return notes;
}

function saveJSON() {
  var filePath = path.join(__dirname, '../public/notes.json');
  var jsonNotes = JSON.stringify(notes);
  fs.writeFile(filePath, jsonNotes, function(err) {
    if (err) {
      console.log(err);
    }
  });
}