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

    var id = 0;

    function _tag(ele, level) {
      var data = {name: ele.tagName, id: ++id, level: level, type: ele.nodeType, closed: false, ele: ele};
      data.children = [];

      if (ele.nodeType === 3) {
        data.text = ele.textContent;
        if (!/\S/.test(data.text)) {
          return null;
        }
      }

      ele = angular.element(ele);

      var children = ele.contents();
      for (var i = 0; i < children.length; ++i) {
        var child = children[i];
        var node = domToNode(child, 1 + level);
        if (node) {
          data.children.push(node);
        }
      }
      return data;
    }

    function domToNode(ele, level) {
      if (!level) {
        level = 0;
      }
      if (ele.id === 'overlay' || ele.id === 'fade') { // prevent recursion into dialog
        return null;
      }

      var out = null;

      switch (ele.nodeType) {
        case 1: // element
          out = _tag(ele, level);
          break;

        case 3: // text
          out = _tag(ele, level);
          break;
      }

      return out;
    }

    return function (html) {
      var data = [];
      if (!html) {
        html = $document.children()[0];
      }
      data.push(domToNode(html));
      return data;
    };

  });
