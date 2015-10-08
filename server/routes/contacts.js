var express = require('express');
var router = express.Router();
var db = require("../db");

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hey!")
  db.loadContacts(function(contacts) {
    console.log("whoat!", contacts)
    res.send(contacts);
  })
  console.log("sucks!")
  
});

router.post('/', function(req, res, next) {
  var contact = db.createContact(req.body);
  db.save(contact, function(data) {
    res.send(data);
  })
});

router.post('/delete', function(req, res, next) {
  console.log(req.body)
  db.removeContact(req.body.id);
  res.send(200);
});

router.post('/update', function(req, res, next) {
  db.updateContact(req.body, function(data) {
    res.send(data);
  })
});
module.exports = router;
