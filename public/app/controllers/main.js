/**
 * Created by info_000 on 2016-06-16.
 */
var MyApp =  angular.module('MyApp',['ngRoute']);
MyApp.config(
    function($routeProvider,$locationProvider) {
        $routeProvider
            .when("api/home/student", {
                templateUrl : "public/app/views/pages/StudentManagement.html",
                message:"11111"

            })
            .otherwise("/TeacherManagement", {
                templateUrl : "/TeacherManagement.html"
            });
      $locationProvider.html5Mode(true);
        
    }
);