app.controller("homeCtrl", function($scope, contactService) {

  $scope.contactList = [];
  contactService.getAll(function(contacts) {
    $scope.contactList = contacts;
  });

  $scope.addContact = function() {
    contactService.create($scope.data, function() {

    });
  }
});