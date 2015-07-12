'use strict';

/**
 * @ngdoc function
 * @name domExplorerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the domExplorerApp
 */
angular.module('domExplorerApp')
  .controller('MainCtrl', function ($scope, ModalService) {

    var opened = false;

    $scope.showDialog = function () {
      if (opened) {
        return;
      }

      ModalService.showModal({
        templateUrl: "/views/dialog/dialog.html",
        controller: "DialogCtrl",
      }).then(function (modal) {
        opened = true;
        // The modal object has the element built, if this is a bootstrap modal
        // you can call 'modal' to show it, if it's a custom modal just show or hide
        // it as you need to.
        modal.element.modal();
        modal.close.then(function () {
          opened = false;
        });
      });

    };
  });
