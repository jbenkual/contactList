app.service("contactService", function($http) {

  this.contactList = [];

  this.getAll = function(cb) {
    $http("http://localhost:8000/contacts", function(data) {
      this.contactList = data;
      cb(data);
    });
  }
  

});