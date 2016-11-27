var app = angular.module('TestApp', []);
app.controller('HomeCtrl',['$scope', function($scope) {
    $scope.message = 'Hello World';
    console.log($scope.message);
}]);