var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
  $routeProvider 
    .when('/',{
     templateUrl: 'pages/main.html',
     controller: 'mainController'
  })
    .when('/information',{
     templateUrl: 'pages/information.html',
     controller: 'mainController'
  })
    .when('/about',{
     templateUrl: 'pages/about.html',
     controller: 'mainController'
  })
});

myApp.controller('mainController', ['$scope', function($scope){

}]);

// myApp.controller('secondController', ['$scope', function($scope){

// }]);