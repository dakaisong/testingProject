var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    
    $scope.addUser = function () {
        console.log($scope.user);
        $http.post('/api/signup', $scope.user).success(function(response) {
            console.log(response);
        });
    }
}]
)
