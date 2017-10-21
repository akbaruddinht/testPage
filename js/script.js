var uiApp = angular.module('uiApp', ['ngRoute']);

uiApp.config(function($routeProvider){
    $routeProvider
    // home page
    .when('/', {
        controller: 'mainController',
        templateUrl: '../html/main.html',
    })
    .when('/projects', {
        controller: 'projectController',
        templateUrl: '../html/projects.html',
    })
    .when('/blog', {
        controller: 'blogController',
        templateUrl: '../html/blog.html',
    })
    .otherwise({
        redirectTo: '/'
    });

})

uiApp.controller('mainController', function($scope){

})