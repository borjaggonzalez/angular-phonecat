'use strict';

// Define the `core` module
var core = angular.module('core', ['core.phone']);


core.constant("sOperativosConstantes",{

        
         "so":[{
                "nombre":"Android",
                "versiones":[
              {
                "so":"Android 1.0",
                "ui":"Apple Pie"    
              },
              {
                "so":"Android 1.1 ",
                "ui":"Bannana Bread"    
              },
              {
                "so":"Android 1.5",
                "ui":"Cupcake"    
              },
              {
                "so":"Android 1.6",
                "ui":"Donut"    
              },
              {
                "so":"Android 2.0",
                "ui":"Eclair"    
              },
              {
                "so":"Android 2.2",
                "ui":"Froyo"    
              },
              {
                "so":"Android 2.3",
                "ui":"Gingerbreade"    
              },
              {
                "so":"Android 3.0",
                "ui":"Honeycomb"    
              },
              {
                "so":"Android 4.0",
                "ui":"Honeycomb"    
              },
              {
                "so":"Android 4.1",
                "ui":"Jelly Bean"    
              },
              {
                "so":"Android 4.4",
                "ui":"KitKat"    
              },
              {
                "so":"Android 5.0",
                "ui":"Lollipop"    
              },
              {
                "so":"Android 6.0",
                "ui":"Marshmallow"    
              },
              {
                "so":"Android 7.0",
                "ui":"Nougat"    
              },
              {
                "so":"Android 8.0",
                "ui":"Oreo"    
              },
               {
                "so":"Android 9.0",
                "ui":"Pie"    
              }
            ]
        },
        {
          "nombre":"iOS",
          "versiones":[
            {
              "so":"iOS 10.3.4" 
            },
            {
              "so":"iOS 12.4.1"
            },
            {
              "so":"iOS 13.1.3"
            }
          ]
        }
        ]
      
        
        });