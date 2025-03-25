// code adapted from ExpressJS Template

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



// new code for notes app

document.addEventListener('DOMContentLoaded', loadNotes);

function saveNote() {
  const noteInput = document.getElementById('noteInput');
  const text = noteInput.value.trim();
  
  if (!text) return;

  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  const newNote = {
    id: Date.now(), // Unique ID using timestamp
    text: text,
    date: new Date().toLocaleString()
  };

  notes.push(newNote);
  localStorage.setItem('notes', JSON.stringify(notes));
  
  noteInput.value = '';
  loadNotes();
}

function loadNotes() {
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  const container = document.getElementById('notesContainer');
  
  container.innerHTML = notes
    .map(note => `
      <div class="note-card">
        <div class="note-text">${note.text}</div>
        <div class="note-date">${note.date}</div>
        <div class="note-actions">
          <button onclick="editNote(${note.id})" class="edit-btn">Edit</button>
          <button onclick="deleteNote(${note.id})" class="delete-btn">Delete</button>
        </div>
      </div>
    `)
    .join('');
}

function deleteNote(noteId) {
  let notes = JSON.parse(localStorage.getItem('notes') || []);
  notes = notes.filter(note => note.id !== noteId);
  localStorage.setItem('notes', JSON.stringify(notes));
  loadNotes();
}

function editNote(noteId) {
  const notes = JSON.parse(localStorage.getItem('notes') || []);
  const note = notes.find(note => note.id === noteId);
  const newText = prompt('Edit your note:', note.text);
  
  if (newText !== null) {
    note.text = newText.trim();
    note.date = new Date().toLocaleString();
    localStorage.setItem('notes', JSON.stringify(notes));
    loadNotes();
  }
}

loadNotes();
