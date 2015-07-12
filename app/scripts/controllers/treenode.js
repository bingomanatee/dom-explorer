'use strict';

/**
 * @ngdoc function
 * @name domExplorerApp.controller:TreenodeCtrl
 * @description
 * # TreenodeCtrl
 * Controller of the domExplorerApp
 */
angular.module('domExplorerApp')
  .controller('TreenodeCtrl', function ($scope) {
    $scope.overTreeNode = function () {
      if ($scope.$parent && $scope.$parent.leaveTreeNode) {
        $scope.$parent.leaveTreeNode();
      }
      $scope.isOver = true;
    };

    $scope.leaveTreeNode = function () {
      $scope.isOver = false;
    };

    $scope.treeNodeStyle = function () {
      return {'flex-basis': (0.05 + $scope.node.level * 2.2) + 'rem'};
    };

    $scope.toggleClosed = _.debounce(function () {
      $scope.node.closed = !$scope.node.closed;
    }, 50);

  });
