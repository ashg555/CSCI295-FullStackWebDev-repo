const express = require('express');
const app = express();
const port = 3000;

app.get('/about', (req, res) => {
  res.send('This is an about page- welcome to the server')
})

app.get('/contact', (req, res) => {
  res.send('Contact me at: email')
})

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.put('/', (req, res) => {
  res.send('Got a PUT request.')
})

app.delete('/', (req, res) => {
  res.send('Got a DELETE request.')
})

app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})

// This path works for /acd and /abcd
app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})

// Searching by URL parameters
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

// addition route
app.get('/add/:n1/:n2', (req, res) => {
  var n1 = parseInt(req.params.n1);
  var n2 = parseInt(req.params.n2);
  var sum = n1 + n2;
  res.send('The sum is ' + sum.toString());
})

app.get('/multiply/:n1/:n2', (req, res) => {
  var n1 = parseInt(req.params.n1);
  var n2 = parseInt(req.params.n2);
  var product = n1 * n2;
  res.send(product.toString());
})

//array of callback functions
const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

const cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])