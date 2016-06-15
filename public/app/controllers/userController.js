

var userLogin = angular.module('userLogin', []);

userLogin.controller('LoginController', ['$scope', '$http', function($scope, $http) {
        console.log("Hello World from user controller");


        $scope.addUser = function () {
            console.log($scope.user);
            $http.post('/api/signup', $scope.user).success(function(response) {
                console.log(response);
            });
        }
    
        $scope.login=function () {
            console.log($scope.user);
            $http.post('/api/login',$scope.user).success(function (response) {
                getUserInfo();
            })
        }
        
        var getUserInfo =function () {
            $http.get('/api/users').success(function (response) {
                console.log("I got the data I requested");
                $scope.userlist = response;
                $scope.user = "";
            });
        }

    
    }]
)
