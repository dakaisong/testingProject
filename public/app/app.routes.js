/**
 * Created by AlphTech-Don on 6/14/2016.
 */

angular.module('appRoutes',['ngRoute'])

.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/',{
                templateUrl :'app/views/pages/home.html'
            })
    
})