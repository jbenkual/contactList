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

});