'use strict';

describe('Service: domNodes', function () {

  // load the service's module
  beforeEach(module('domExplorerApp'));

  // instantiate service
  var domNodes, $document;
  beforeEach(inject(function (_domNodes_, _$document_) {
    domNodes = _domNodes_;
    $document = _$document_;
  }));

  var map;

  beforeEach(function () {
    var titleNode = angular.element($document.children()[0]).find('title');
    titleNode.text('Test Title');
    map = domNodes();
  });

  it('should have an HTML element in root', function () {
    expect(map[0].name).toEqual('HTML');
    expect(map[0].children[0].name).toEqual('HEAD');
  });

  it('should have a title tag with a text child', function(){
    var titleNode = null;

    for (var i = 0; i < map[0].children[0].children.length; ++i){
      if (map[0].children[0].children[i].name === 'TITLE'){
        titleNode = map[0].children[0].children[i];
      }
    }

    expect(titleNode.children.length).toEqual(1);
    expect(titleNode.children[0].text).toEqual('Test Title');
  });

  it('should have the right levels', function () {
    expect(map[0].level).toEqual(0);
    expect(map[0].children[0].level).toEqual(1);
  });

});
