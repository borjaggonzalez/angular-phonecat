'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneCesta').
  component('phoneCesta', {
    templateUrl: 'phone-cesta/phone-cesta.template.html',
 
    controller: ['$scope','compraMovil',
      function PhoneComparadorController($scope,compraMovil) {
         console.trace('PhoneCestaController');
         var self = this;
     
    
     self.comprarMovil = function(){
          return compraMovil.getProducto();
        };
        
    }
   ]

  
});

