'use strict';

xdescribe('Directive: tree', function () {

  // load the directive's module
  beforeEach(module('domExplorerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tree></tree>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tree directive');
  }));
});
