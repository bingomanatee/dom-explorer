'use strict';

/**
 * @ngdoc filter
 * @name domExplorerApp.filter:properCase
 * @function
 * @description
 * # properCase
 * Filter in the domExplorerApp.
 */
angular.module('domExplorerApp')
  .filter('properCase', function () {
    return function (input) {
      if (typeof input !== 'string') {
        return '';
      }
      return input.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    };
  });
