'use strict';

describe('Service: domNodes', function () {

  // load the service's module
  beforeEach(module('domExplorerApp'));

  // instantiate service
  var domNodes;
  beforeEach(inject(function (_domNodes_) {
    domNodes = _domNodes_;
  }));

  var map;

  beforeEach(function () {
    map = domNodes();
  });

  it('should have an HTML element in root', function () {
    expect(map[0].name).toEqual('HTML');
    expect(map[0].children[0].name).toEqual('HEAD');
  });

});
