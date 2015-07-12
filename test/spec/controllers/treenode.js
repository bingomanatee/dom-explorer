'use strict';

describe('Controller: TreenodeCtrl', function () {

  // load the controller's module
  beforeEach(module('domExplorerApp'));

  var TreenodeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TreenodeCtrl = $controller('TreenodeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('has no tests', function () {
  });
});
