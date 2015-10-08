app.controller("homeCtrl", function($scope, contactService) {

  $scope.contactList = [];
  $scope.edit = false;
  contactService.getAll(function(contacts) {
    $scope.contactList = contacts;
  });

  $scope.addContact = function() {
    contactService.create($scope.data, function() {

    });
  }

  $scope.removeContact = function(id) {
    console.log("remove")
    contactService.delete(id);
  }
  $scope.editContact = function(contact) {
    $scope.edit = true;
    $scope.data = contact;
  }
  $scope.saveContact = function() {
    contactService.update($scope.data);
  }
});