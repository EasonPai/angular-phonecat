'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
      
      //  limiting the number of phones to the first 5 in the list
      $scope.phones = data.splice(0, 5);
//    $scope.phones = data;
  });

  $scope.orderProp = 'age';
});
