

var userLogin = angular.module('userLogin', []);

myApp.controller('LoginController', ['$scope', '$http', function($scope, $http) {
        console.log("Hello World from user controller");


        $scope.addUser = function () {
            console.log($scope.user);
            $http.post('/api/signup', $scope.user).success(function(response) {
                console.log(response);
            });
        }
    }]
)
