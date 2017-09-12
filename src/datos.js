var ngDllsController = angular.module('ngDllsController', []);

      ngDllsController.controller('DllsController',['$scope','$http',function($scope,$http){
           var todos = $scope;
           $scope.nombre='Miraflores';
            todos.a = [  {"nombre":"Mama Diablo", "comentarios":"12","visto":"81","gusta":"145","grupo":"Veneno","hora":"21:30","img":"Nota-9889-fiesta_de_ano_nuevo.jpg","bebidas":"Wiski, Ron, Cerveza, Jarras","espacio":"disponible","precio":"45","musica":"Tropical","estado":"abierto","edad":"+21","guardaropa":"Si","horario":"de 10:00 p.m. a 03:00 a.m.","publico":"+40 años","seguidores":"300","dias":" Lu,Ma,Mi,Ju,Vi,Sa,Do"}
                        ,{"nombre":"El GURU","comentarios":"2","visto":"15","gusta":"15","grupo":"El Gran Matador","hora":"23:00","img":"fiesta-tres.jpg","bebidas":"Wiski, Ron","espacio":"disponible","precio":"50","musica":"Tropical","estado":"abierto","edad":"+40","guardaropa":"No","horario":"de 10:00 p.m. a 03:00 a.m.","publico":"+40 años","seguidores":"1500","dias":" Lunes a Sabado"}
                        ,{"nombre":"Plan B","comentarios":"1","visto":"1","gusta":"14","grupo":"La quinta Estación","hora":"22:00","img":"9f6adecaa9e58afcc73a79884c44543a.jpg","bebidas":"Ron, Cerveza, Jarras","espacio":"no_disponible","precio":"25","musica":"Rock","estado":"cerrado","edad":"+21","guardaropa":"Si","horario":"de 08:39 p.m. a 02:00 a.m.","publico":"+40 años","seguidores":"540","dias":"Lunes a Sabado"}
                        ,{"nombre":"Equinoccio","comentarios":"10","visto":"2","gusta":"245","grupo":"Maldita Jaqueca","hora":"21:00","img":"encontrar-nuevos-amigos-860x450.jpg","espacio":"disponible","precio":"20","musica":"Tropical","estado":"abierto","edad":"+21","guardaropa":"Si","horario":"de 10:00 p.m. a 03:00 a.m.","publico":"+40 años","seguidores":"500","dias":"Lunes a Sabado"}
                        ,{"nombre":"Carretera 66","comentarios":"50","visto":"20","gusta":"15","grupo":"La orca ","hora":"19:00","img":"pic4.jpg","espacio":"disponible","precio":"20","musica":"Alternativa","estado":"cerrado","edad":"+18","guardaropa":"Si","horario":"de 07:00 p.m. a 03:00 a.m.","publico":"+40 años","seguidores":"50","dias":"Miercoles a Sabado"}];
            //  //todos.id="";
           
             // todos.nombre='';
             // todos.grupo='';
             // todos.hora='';
             // todos.imag='';
             // todos.precio='';
             // todos.bebidas='';
             // todos.musica='';
             // todos.espacio='';
             // todos.estado='';
             //todos.edad="",
             //todos.guardaropa="",
             //todos.horario="";
             //todos.seguidores="";
             //todos.dias;
             //todos.publico;
    
//           var dato = resultado.data;
//               var arr = new Array();
//                   for (var i = 0 ; i<dato.length; i++){
//                       // alert(i);
//                           arr.push(dato[i]);
//          $scope.datos = arr.results;
//           $scope.dato1 = arr[0];

//           var datores = $scope.dato1.posts.data;
//           var arr2 = new Array();
//           for (var j = 0; j<datores.length; j++){
//             // alert(j);
//             arr2.push(datores[j].message);
//             //$scope.fin = arr2;
//             $scope.datores1 = arr2[5];
//           }


//          $scope.dato2 = arr[0];
//                   };
//         });
// }
      

dia = new Date();
 var b = dia.getDate();
 todos.fecha= b;
todos.b = [{"nombre":"LA DIOSA", "comentarios":"12","visto":"81","gusta":"145","estado":"abierto","hora":"21:00 a 03:00","imag":"header2.jpg","bebidas":"Wiski, Ron, Cerveza, Jarras","espacio":"disponible","precio":"45"}
          ,{"nombre":"KATANAS", "comentarios":"12","visto":"81","gusta":"145","estado":"abierto","grupo":"El Gran Matador","hora":"19:00 a 03:00","imag":"photo4.jpg","bebidas":"Wiski, Ron","espacio":"disponible","precio":"50","musica":"Tropical"}
          ,{"nombre":"Punto Clave", "comentarios":"12","visto":"81","gusta":"145","estado":"abierto","grupo":"La quinta Estación","hora":"21:00 a 04:00","imag":"photo2.png","bebidas":"Ron, Cerveza, Jarras","espacio":"no_disponible","precio":"25","musica":"Rock"}
          ,{"nombre":"OK","estado":"cerrado", "comentarios":"12","visto":"81","gusta":"145","grupo":"Maldita Jaqueca","hora":"20:30 a 02:00","imag":"photo3.jpg","espacio":"disponible","precio":"20","bebidas":"Whisky, Ron, Cerveza, Jarras"}];
              
            // $http({
            //     method:'GET',
            //     url:'/api/buscar'
            // }).then (function(data){
            //     todos.a = data;
            // },function(err){
            //     res.send('data no encontrada');
            // });

         }]);