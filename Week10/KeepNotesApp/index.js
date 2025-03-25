const express = require('express');
const app = express();
const path = require('path');

// Configure EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files with correct MIME types
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));


// Route to render EJS template
app.get('/', (req, res) => {
  res.render('index');
});




app.listen(2000, () => {
  console.log('Server running on port 2000');
});

// app.listen(2000, "10.53.2.235");