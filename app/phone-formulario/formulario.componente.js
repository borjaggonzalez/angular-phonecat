'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneFormulario').
  component('formulario', {
    templateUrl: 'phone-formulario/formulario.template.html',
    controller: ['Phone','sOperativosConstantes',
      function FormularioController(Phone,sOperativosConstantes) {
            var self =this;

        /*JSON VERSIONES MOVILES ANDROID E IOS */

      self.so = sOperativosConstantes.so;

      self.change = function(i){
        self.version = self.so[i].versiones;
      };
      

        /*ARRAY VERSIONES MOVILES ANDROID E IOS */
        self.guardar = function (movil) {
            console.trace('click nuevoMovil movil.nombre %s', movil.nombre);
            Phone.create(movil).then(
              (res)=>{
                console.debug('telfono creado');
              },
              (res)=>{
                console.warn('telfono NO se puede registrar');
              }
            );
            
        }

      }
    ]
  });