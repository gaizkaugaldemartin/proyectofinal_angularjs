angular.
  module('angularApp').  
  component('componenteMenu', {   
    templateUrl: './components/menu/template.menu.html',
    controller: function MenuController($scope) {

      console.trace('MenuController');  
     
      $scope.rutas = [
        {
          "nombre": "Inicio",
          "url": "#!/",
          "active": false,
          "icono": "fas fa-home"
        },
        {
          "nombre": "Frutas",
          "url": "#!/frutas",
          "active": true,
          "icono": "fas fa-carrot"
        },
        {
          "nombre": "Componentes",
          "url": "#!/componente1",
          "active": false,
          "icono": "fas fa-window-restore"
        },       
        {
          "nombre": "Prg. Funcional",
          "url": "#!/funcional",
          "active": false,
          "icono": "fas fa-filter"
        },
        {
          "nombre": "Promesas",
          "url": "#!/promesas",
          "active": false,
          "icono": "fas fa-pray"
        },
        {
          "nombre": "Servicios",
          "url": "#!/servicios",
          "active": false,
          "icono": "fas fa-server"
        },
        {
          "nombre": "CRUD",
          "url": "#!/crud",
          "active": false,
          "icono": "fas fa-music"
        },
        {
          "nombre": "Creditos",
          "url": "#!/creditos",
          "active": false,
          "icono": "fab fa-creative-commons"
        },
        {
          "nombre": "Formulario",
          "url": "#!/formulario",
          "active": false,
          "icono": "fab fa-wpforms"
        },
        {
          "nombre": "Pokemones",
          "url": "#!/pokemones",
          "active": false,
          "icono": "fas fa-gamepad"
        },
        {
          "nombre": "Ejercicios",
          "url": "#!/ejercicios",
          "active": false,
          "icono": "fas fa-address-book"
        }
        
      ];
      
    
      $scope.cambiarActivo = function( ruta ){
        console.trace('click cambiarActivo %o', ruta);

        //desactivar activo a todas las rutas
        $scope.rutas.forEach(element => {
          element.active = false;
        });
        //activar solo sobre la hemos hecho click
        ruta.active = true;

      }//cambiarActivo



    }// controlador

  });