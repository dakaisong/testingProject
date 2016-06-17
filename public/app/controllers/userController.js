

var userLogin = angular.module('userLogin', ['ngCookies']);

userLogin.controller('LoginController', ['$scope', '$http','$window','$location','$cookies', function($scope,$http,$window,$location,$cookies) {
        console.log("Hello World from user controller");

        $scope.addUser = function () {
            console.log('this is sign up')
            console.log($scope.user);
            $http.post('/api/signup', $scope.user).success(function(response) {
                console.log(response);
                
                //http://stackoverflow.com/questions/24857822/how-to-redirect-one-html-page-to-another-using-button-click-event-in-angularjs
            })
               // $window.location.href='/login';
        }

        $scope.login=function (res,req,next) {
            console.log($scope.user);
            $http.post('/api/login',$scope.user).then(function (res,req) {
                    $cookies.put('token',null);
                    $scope.token = res.data.token;
                    $cookies.put('token',res.data.token);
                    console.log($cookies.get('token'));
                    $window.location.href='/api/home';
                });
            

        }

        $scope.testCookies=function (res,req,next) {
                console.log("this is test cookies");
                if ($scope.token){
                    console.log("has token");
                }else {
                    console.log("has no token");
                }

        }

        $scope.logout=function (res,req) {
            $cookies.put('token',null);
            $scope.token = null;

        }
        
        var getUserInfo =function () {
                console.log('get next page');
                $window.location.href='/api/home';

        }

    
    }]
)
