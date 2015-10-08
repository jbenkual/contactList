app.service("contactService", function($http) {

  this.contactList = [];

  this.getAll = function(cb) {
    $http.get("http://localhost:8000/contacts").success(function(data) {
      console.log('data', data);
      this.contactList = data;
      cb(data);
    });
  }

  this.create = function(contact, cb) {
    $http.post("http://localhost:8000/contacts", contact, function(data) {
      this.contactList = data;
      cb(data);
    });
  }

  this.delete = function(id, cb) {
    $http.post("http://localhost:8000/contacts/delete", {id: id}, function(data) {
      this.contactList = data;
      cb(data);
    });
  }

  this.update = function(contact, cb) {
    $http.post("http://localhost:8000/contacts/update", contact, function(data) {
      this.contactList = data;
      cb(data);
    });
  }

});