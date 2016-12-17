angular.module('todoController', []).controller('mainController', function($scope, $http, Todos) {
        $scope.formData = {};

        // GET
        // when landing on the page, get all todos and show them
        // use the service to get all the todos
        Todos.get()
            .success(function(data) {
                $scope.todos = data;
            });

        // POST
        // when submitting the add form, send the text to the node API
        $scope.createTodo = function() {

            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            if (!$.isEmptyObject($scope.formData)) {

                // call the create function from the service (returns a promise object)
                Todos.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {}; // clear the form so the user is ready to enter another
                        $scope.todos = data; // assign the new list of todos
                    });
            }
        };

        // UPDATE
        // edit a todo after checking it
        $scope.updateTodo = function(id){
            Todos.update(id)
                .sucess(function(data){
                    $scope.todos = data; // assign the new list of todos
                });
        };

        // DELETE
        // delete a todo after checking it
        $scope.deleteTodo = function(id) {
            Todos.delete(id)
                .success(function(data) {
                    $scope.todos = data; // assign the new list of todos
                });
        };
    });
