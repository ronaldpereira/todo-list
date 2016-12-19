angular.module('userController', []).controller('mainController', function($scope, $http, Users) {
    $scope.formData = {};

    // GET
    Users.get()
        .success(function(data) {
            $scope.user = data;
        });

    // POST
    // when submitting the add form, send the text to the node API
    $scope.createUser = function() {

        // validate the formData to make sure that something is there
        // if form is empty, nothing will happen
        if (!$.isEmptyObject($scope.formData)) {

            // call the create function from the service (returns a promise object)
            Users.create($scope.formData)
                .success(function(data) {
                    $scope.formData = {}; // clear the form so the user is ready to enter another
                    $scope.user = data; // assign the new list of users
                });
        }
    };
});
