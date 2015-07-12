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
      template: '<div>' +
      '<tree-node class="tree-node-content" name="node.name" ng-click="toggleClosed()" ng-class="{\'tree-node--over\': isOver }" ng-mouseenter="overTreeNode()" ng-mouseLeave="leaveTreeNode()">' +
     '<div class="tree-node__spacer" ng-style="treeNodeStyle()">&nbsp;</div>' +
      '<button class="tree-node__zoom-button" ng-class="{\'tree-node__zoom-button--closed\' : node.closed && node.children.length, \'tree-node__zoom-button--hidden\' : !node.children.length }"></button>' +
      '<button class="tree-node__folder-button" ng-class="{\'tree-node__folder-button--head\': node.name.toLowerCase() == \'head\', \'tree-node__folder-button--text\': node.type == 3}"></button>' +
      '<span class="tree-node__label"> {{node.name | properCase }} </span>' +
        '<span class="tree-node__text"><span ng-if="node.type == 3">{{ node.text }}</span></span>' +
      '</div></tree-node>' +
      '<tree-node-children-placeholder ng-hide="node.closed"></tree-node-children-placeholder>' ,

      restrict: 'E',
      scope: {node: '='},
      controller: 'TreenodeCtrl',
      link: function postLink($scope, element) {
        if ($scope.node.children && $scope.node.children.length) {
          element.find('tree-node-children-placeholder').html('<tree-node-children children="node.children"></tree-node-children>');
          $compile(element.contents())($scope);
        }
      }
    };

  });
