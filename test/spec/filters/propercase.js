'use strict';

describe('Filter: properCase', function () {

  // load the filter's module
  beforeEach(module('domExplorerApp'));

  // initialize a new instance of the filter before each test
  var properCase;
  beforeEach(inject(function ($filter) {
    properCase = $filter('properCase');
  }));

  it('should return the input prefixed with "properCase filter:"', function () {
    var text = 'angular js';
    expect(properCase(text)).toBe('Angular Js');
  });

});
