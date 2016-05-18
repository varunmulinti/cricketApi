var angularApp = angular.module('cricApi', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider){
  $routeProvider
  .when ('/',{
    templateUrl: 'pages/main.html',
    controller: 'HomeController',
    controllerAs:'hm'
  })
  .when ('/cricketdetails/:uniqId',{
    templateUrl: 'pages/details.html',
    controller: 'DetailsController',
    controllerAs:'dc'
  })
});


angularApp.controller("HomeController",['$resource',function($resource){
  var vm=this;
    var cricResource = $resource('http://cricapi.com/api/cricket');
    vm.cricResponse = cricResource.get();
    console.log(vm.cricResponse);
}]);

angularApp.controller("DetailsController",['$resource','$routeParams',function($resource,$routeParams){
  var vm=this;
  var id = $routeParams.uniqId;
  var cricResource = $resource('http://cricapi.com/api/cricketScore',{unique_id:id});
  vm.cricResponse = cricResource.get();
  console.log(vm.cricResponse);
}])
