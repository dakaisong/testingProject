

var userLogin = angular.module('userLogin', []);

userLogin.controller('LoginController', ['$scope', '$http','$window','$location', function($scope, $http,$window,$state) {
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

        }


    
    }]
)
