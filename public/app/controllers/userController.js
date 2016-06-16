

var userLogin = angular.module('userLogin', []);



userLogin.controller('LoginController', ['$scope', '$http','$window','$location', function($scope, $http,$window,$location) {
        console.log("Hello World from user controller");


        $scope.addUser = function () {
            console.log($scope.user);
            $http.post('/api/signup', $scope.user).success(function(response) {
                console.log(response)
                console.log($location)
                //http://stackoverflow.com/questions/24857822/how-to-redirect-one-html-page-to-another-using-button-click-event-in-angularjs
            })

        }

        $scope.login=function (res,req,next) {
            console.log($scope.user);
            $http.post('/api/login',$scope.user).success(function (response) {
                    $window.location.href='/api/home';
                })

        }

        var getUserInfo =function () {
                console.log('get next page');

                $window.location.href='/api/login/home';


            $http.post('/api/login',$scope.user).success(function (response){
                getUserInfo();
                $window.location.href='/api/home'
            })
        }

        var getUserInfo =function () {
            $http.get('/api/home').success(function (response) {
                console.log("I got the data I requested");
                $window.location.href='/api/home'
            });

        }
    
    }]
)

