var uiApp = angular.module('uiApp', ['ngRoute', "chart.js"]);

uiApp.config(function($routeProvider, $locationProvider){
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

    $locationProvider.html5Mode(true);

})

uiApp.controller('mainController', function($scope, $http){
    $scope.skills = [];

    $http.get('assests/skills.json')
    .then(function(response){
        $scope.skills = response.data;
    })

    $scope.labels = ["AngularJs", "Reactjs/Redux"];
    $scope.data = [70, 30];
    $scope.colors = [ '#5cb85c', '#d9534f']
    
});

uiApp.controller('projectController', function($scope){

});

uiApp.controller('blogController', function($scope){

});