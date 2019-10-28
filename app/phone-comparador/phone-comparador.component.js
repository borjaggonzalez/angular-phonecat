'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone','$scope','compraMovil',
      function PhoneComparadorController(Phone,$scope,compraMovil) {
        var self = this;
        console.trace('PhoneCompradadorController');
        self.phones = {};
        self.phone1 = {};
        self.phone2 = {};
        self.selec=0;
        self.orderProp = 'age';
        
        Phone.getAll().then((res)=>self.phones=res.data);
        
        self.seleccionar = function(phone){
          self.phone2 = self.phone1;
          self.phone1 = phone;
        }
         

        $scope.$on("eventoComprar",function(event,data){
          alert('eventoComprar en padre' + data.telefono.id);
        });
        
        self.comprarMovil = function(){
          return compraMovil.getProducto();
        };
        
      
      }
   ]
  });
