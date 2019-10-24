'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone','$scope',
      function PhoneComparadorController(Phone,$scope) {
        var self = this;
        console.trace('PhoneCompradadorController');
        self.phones = Phone.query();
        self.phone1 = {};
        self.phone2 = {};
        self.selec=0;
        self.orderProp = 'age';
        
     
        
        self.seleccionar = function(phone){
          self.phone2 = self.phone1;
          self.phone1 = phone;
        }
         

        $scope.$on("eventoComprar",function(event,data){
          alert('eventoComprar en padre' + data.telefono.id);
        });
      
      }
   ]
  });
