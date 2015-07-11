'use strict';

xdescribe('Controller: DialogCtrl', function () {

  // load the controller's module
  beforeEach(module('domExplorerApp'));

  var DialogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DialogCtrl = $controller('DialogCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('has no tests', function () {
  });
});
