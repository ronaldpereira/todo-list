angular.module('todoService', [])
    .factory('Todos', function($http) {
        return {
            get : function() {
                return $http.get('/api/todos');
            },
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
            update : function(todoData) {
                return $http.update('/api/todos/edit' + id);
            },
            delete : function(id) {
                return $http.delete('/api/todos/' + id);
            }
        }
    });
