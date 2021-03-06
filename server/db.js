var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contacts');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Connected to database");
});

var contactSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

var Contact = mongoose.model('contact', contactSchema);

exports.createContact = function(data) {
  console.log(data);
  var newContact = new Contact({ 
    name: data.name,
    email: data.email,
    phone: data.phone
  });

  return newContact;
};

exports.save = function(object, cb) {
  if(!object.hasOwnProperty('save')) {
    console.error("Error: Tried to save a non-mongoose object");
    return;
  }
  object.save(function (err, data) {
    if (err)  {
      console.error(err);
    }
    console.log("Data saved!");
    cb(data);
  });
};

exports.loadContacts = function(cb) {
  var data = Contact.find({}, function(err, contacts) {
    cb(contacts);
  });
};

exports.removeContact = function(id) {
  console.log("delete", id);
  Contact.findById(id).remove( function(err, status) {
    if(err) {
      console.error(err);
    }
  });
};

exports.updateContact = function(id, data, cb) {
  Contact.findByIdAndUpdate(id, data, function(err, contact){
    cb(contact);
  })
};

