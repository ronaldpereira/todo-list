angular.module('userService', [])
.factory('Users', function($http) {
    return {
        get : function() {
            return $http.get('/api/users');
        },
        create : function(userData) {
            return $http.post('/api/users', userData);
        },
    }
});
