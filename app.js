var angularApp = angular.module('cricApi', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider){
  $routeProvider
  .when ('/',{
    templateUrl: 'pages/main.html',
    controller: 'HomeController'
  })

});


angularApp.controller("HomeController",['$resource',function($resource){
  var vm=this;
    var cricResource = $resource('http://cricapi.com/api/cricket');
    vm.cricResponse = cricResource.get();
    console.log(vm.cricResponse);
}]);
