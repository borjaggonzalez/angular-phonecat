'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('menu', {
    templateUrl: 'menu/menu.template.html',
    controller: ['$routeParams',
      function MenuController($routeParams) {

      }
    ]
  });