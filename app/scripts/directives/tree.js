'use strict';

/**
 * @ngdoc directive
 * @name domExplorerApp.directive:tree
 * @description
 * # tree
 */
angular.module('domExplorerApp')
  .directive('tree', function ($compile) {

    return {
      template: '<tree-node>' +
      '<button class="zoom-button zoom-button-closed"></button>' +
      '<button class="folder-button"></button>' +
      '<span class="label">{{node.name | properCase }}</span>' +
        '<children></children>' +
      '</tree-node>',
      restrict: 'E',
      scope: {node: '='},
      link: function postLink($scope, element) {
        if ($scope.node.children && $scope.node.children.length) {
          element.find('children').html('<tree-node-children children="node.children"></tree-node-children>');
          $compile(element.contents())($scope);
        }
      }
    }
  });
