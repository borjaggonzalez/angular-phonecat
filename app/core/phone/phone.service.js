'use strict';

angular.
  module('core.phone').
  factory('Phone', ['$http',
    function($http) {

      let service = {};
      let endpoint = "http://localhost:3000/phones/";
 
      service.getAll = function(){      
         console.trace('GET ' + endpoint);
         return $http.get(endpoint);
      }
 
 
       service.getById = function( id ){
         let url = endpoint + id;
         console.trace('GET ' + url);
         return $http.get(url);
       }
       

       service.create = function( movil ){
        let url = endpoint;
        console.trace('PUT ' + url);
        let body = {"age":0, "id": movil.nombre, "name": movil.nombre };
        return $http.post(url,body);
      }
      
       return service;
    }
  ]);


