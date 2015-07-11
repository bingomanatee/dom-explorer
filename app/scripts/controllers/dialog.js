'use strict';

/**
 * @ngdoc function
 * @name domExplorerApp.controller:DialogCtrl
 * @description
 * # DialogCtrl
 * Controller of the domExplorerApp
 */
angular.module('domExplorerApp')
  .controller('DialogCtrl', function ($scope, close, domNodes) {
    $scope.map = domNodes();

    $scope.display = true;

    $scope.close = close;
  });
