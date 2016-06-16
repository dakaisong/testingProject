var myApp = angular.module('myApp', ['ngRoute']);
/*
myApp.config(
    function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "/home.html"
            })
            .when("/loginPage", {
                templateUrl : "/loginPage.html"
            })
            .when("/signup", {
                templateUrl : "/signup.html"
            });

    }
);*/
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
    
}]
);
