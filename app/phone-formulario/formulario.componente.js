'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneFormulario').
  component('formulario', {
    templateUrl: 'phone-formulario/formulario.template.html',
    controller: ['Phone',
      function FormularioController(Phone) {
            var self =this;

        self.guardar = function (movil) {
            console.trace('click nuevoMovil movil.nombre %s', movil.nombre);
            Phone.create(movil);
            
        }

      }
    ]
  });