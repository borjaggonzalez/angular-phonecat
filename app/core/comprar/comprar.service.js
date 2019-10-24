
core.factory('compraMovil', [
function($resource) {
   
  return {
        producto:[],
        getProducto:function(){
            return this.producto;
        },
        setProducto: function(moviles){
            this.producto.push(moviles);
        }
     };
    }

]);