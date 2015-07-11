'use strict';

/**
 * @ngdoc service
 * @name domExplorerApp.domNodes
 * @description
 * # domNodes
 * Service in the domExplorerApp.
 */
angular.module('domExplorerApp')
  .service('domNodes', function ($document) {

    function _tag(ele) {
      var data = {name: ele.tagName, type: ele.nodeType, open: false};
      data.children = [];

      ele = angular.element(ele);

      var children = ele.children();
      for (var i = 0; i < children.length; ++i) {
        var child = children[i];
        var node = domToNode(child);
        if (node) {
          data.children.push(node);
        }
      }
      return data;
    }

    function domToNode(ele) {
      if (ele.id == 'overlay' || ele.id == 'fade') { // prevent recursion into dialog
        return null;
      }

      switch (ele.nodeType) {

        case 1: // element
          return _tag(ele);
          break;

        case 3: // text
          return {type: 'text', text: ele.text()};
          break;

        default:
          return null;
      }
    }

    return function () {
      var data = [];
      data.push(domToNode($document.children()[0]));
      return data;
    };

  });
