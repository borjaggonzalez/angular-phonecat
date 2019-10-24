'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparadorDetail').
  component('phoneComparadorDetail', {
    templateUrl: 'phone-comparador-detail/phone-comparador-detail.template.html',
    bindings:{
      mostrar:'=',
      comparar:'='
      
    },
    controller: ['$scope','compraMovil',
      function PhoneComparadorController($scope,compraMovil) {
         console.trace('PhoneCompradadorDetailController');
         var self = this;
          self.cesta=[];
    
      self.comprar = function(){
        console.trace('click boton compra %o', self.mostrar  );
        $scope.$emit("eventoComprar", {
           telefono: self.mostrar
        });

      
          console.log("movil columna 1 %o ", self.mostrar);
       

       
        compraMovil.setProducto(self.mostrar);  
        

      }
    }
   ]

    
  })
  .directive("ipDiferencia",[function() {
   
  var directiveDefinitionObject ={
    restrict:"E",
    replace : true,
    template:"<span ng-hide=\"((mostrar)?false:true)\" class=\"label label-{{ ((v1 >= v2)?'success':'danger') }}\">{{ v1 - v2}}</span>",
    scope:{
      v1:"@",
      v2:"@",
      mostrar:"@"
    },
  }
 
  return directiveDefinitionObject;
}]);

