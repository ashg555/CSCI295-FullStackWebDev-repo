var express = require('express');
var router = express.Router();

let phoneContacts = [
  {
    firstName: 'One',
    lastName: 'Example',
    email: 'placeholder@gmail.com',
    phone: '123-456-7890'
  },
  {
    firstName: 'Two',
    lastName: 'Example',
    email: 'email@gmail.com',
    phone: '234-567-8901'
  },
  {
    firstName: 'Three',
    lastName: 'Example',
    email: 'test.test@yahoo.com',
    phone: '345-678-9012'
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Contact Manager App', currentDate: Date() });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Contact Manager App', currentDate: Date() });
});


/* GET contacts page. */
router.get('/mycontacts', function(req, res, next) {
  res.render('viewContacts', { title: 'My Contacts', data:phoneContacts, currentDate: Date() });
});

/* GET add page. */
router.get('/add', function(req, res, next) {
  res.render('addContact', { title: 'Add A Contact', data:phoneContacts, currentDate: Date() });
});

/* POST add page (add a new contact). */
router.post('/add', function(req, res, next) {
  var fName = req.body.firstName;
  var lName = req.body.lastName;
  var email = req.body.email;
  var phone = req.body.phone;
  var newContact = {firstName: fName, lastName: lName, email: email, phone: phone}; 
  phoneContacts.push(newContact);
  res.render('viewContacts', { title: 'My Contacts', data:phoneContacts, currentDate: Date(), info:'New Contact Added' });
});

/* GET delete page. */
router.get('/delete/:id', function(req, res, next) {
  var id= req.params.id;
  phoneContacts = phoneContacts.filter(contact => contact.firstName !== id);
  res.redirect('/mycontacts');
});



module.exports = router;
