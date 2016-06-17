var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(
    function($routeProvider,$locationProvider) {
 
        $routeProvider
            .when("/login", {
                templateUrl :'public/views/index.html',
                message:"11111"
            })
            .otherwise({
                redirectTo:'/',
                message:"2222"
            });
        $locationProvider.html5Mode(true);

    }
);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
    
}]
);
