var angularApp = angular.module('cricApi', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider){
  $routeProvider
  .when ('/',{
    templateUrl: 'pages/main.html',
    controller: 'HomeController'
  })

});


angularApp.controller("HomeController",function($resource){
  var vm=this;
  vm.getcricinfo = function(){
    var cricResource = $resource('http://cricapi.com/api/cricket');
    vm.cricResponse = cricResource.get().$promise;
    console.log("varun");
    console.log(vm.cricResponse);
};
  vm.getcricinfo();
});
