var myApp = angular.module('myApp', ['ngRoute']);
// ng routing
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'OrderController'
    })
    .when('/admin', {
      templateUrl: '/views/admin.html',
      controller: 'AdminController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
