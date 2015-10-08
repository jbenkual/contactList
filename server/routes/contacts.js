var express = require('express');
var router = express.Router();
var db = require("../db");

/* GET home page. */
router.get('/', function(req, res, next) {
  db.getContacts(function(contacts) {
    res.send(contacts);
  })
  
});

router.post('/', function(req, res, next) {
  var contact = db.createContact(req.body);
  db.save(contact, function(data) {
    res.send(data);
  })
});

module.exports = router;
