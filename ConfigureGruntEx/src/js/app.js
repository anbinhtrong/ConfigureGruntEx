var mainApp = angular.module("mainApp", ["ngRoute"]);
mainApp.config(function($routeProvider){
    $routeProvider
        .when('/index', {templateUrl: 'html/firstTemplate.html', controller: 'firstCtrl'})
        .when('/anotherView', { templateUrl: 'html/secondTemplate.html', controller: 'secondCtrl'})
        .otherwise({
            redirectTo: '/index'});
});