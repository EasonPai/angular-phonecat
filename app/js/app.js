'use strict';

/* App Module */

// app module裡面包含兩個module，包括route
var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers'
]);

// config module, 拿到route
phonecatApp.config(['$routeProvider',
  function($routeProvider) {
      
    $routeProvider.
    
    // 指定partials & controller
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
    
    // 用:抓到 route property
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
