'use strict';

/**
 * @ngdoc directive
 * @name domExplorerApp.directive:treeNodeChildren
 * @description
 * # treeNodeChildren
 */
angular.module('domExplorerApp')
  .directive('treeNodeChildren', function () {
    return {
      template: '<div class="tree-node-children" ng-repeat="node in children"><tree node="node"></tree></div>',
      restrict: 'E',
      scope: {children: '='},
      replace: true,
      link: function postLink(scope, element, attrs) {
      }
    };
  });
