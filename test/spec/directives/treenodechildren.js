'use strict';

describe('Directive: treeNodeChildren', function () {

  // load the directive's module
  beforeEach(module('domExplorerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('has no tests', inject(function ($compile) {
    element = angular.element('<tree-node-children></tree-node-children>');
    element = $compile(element)(scope);
  }));
});
