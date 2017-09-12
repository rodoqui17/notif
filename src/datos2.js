var ngDllsController = angular.module('ngDllsController', ['firebase']);

ngDllsController.constant("FBURL", 
  "https://project-6777364007717692132.firebaseio.com/boliches" //Use the URL of your project here
);

 
ngDllsController.controller('DllsController', ['$scope', '$firebaseArray', '$firebaseObject', 'FBURL', function($scope, $firebaseArray, $firebaseObject, FBURL){
 $scope.nombre = "rodrigo"
  var products = new Firebase(FBURL);
  $scope.products = $firebaseArray(products);
   $scope.removeProduct = function(id) {
    var ref = new Firebase(FBURL + id);
    var product = $firebaseObject(ref)
    product.$remove();
   };
   console.log($firebaseArray(products));
}]);

 


//       ngDllsController.controller('DllsController',['$scope',function($scope,$http){
//            var todos = $scope;
//             todos.a = [{"nombre":"Mama Diablo","grupo":"Veneno","hora":"23:00","imag":"header2.jpg","bebidas":"Wiski, Ron, Cerveza, Jarras","espacio":"disponible","precio":"45","musica":"Tropical","estado":"cerrado"},{"nombre":"El GURU","grupo":"El Gran Matador","hora":"23:00","imag":"photo4.jpg","bebidas":"Wiski, Ron","espacio":"disponible","precio":"50","musica":"Tropical","estado":"abierto"}
//                         ,{"nombre":"Plan B","grupo":"La quinta Estación","hora":"22:00","imag":"photo2.png","bebidas":"Ron, Cerveza, Jarras","espacio":"no_disponible","precio":"25","musica":"Rock","estado":"cerrado"}
//                         ,{"nombre":"Equinoccio","grupo":"Maldita Jaqueca","hora":"21:00","imag":"photo3.jpg","espacio":"disponible","precio":"20","musica":"Tropical","estado":"abierto"}];
//              // todos.nombre='';
//              // todos.grupo='';
//              // todos.hora='';
//              // todos.imag='';
//              // todos.precio='';
//              // todos.bebidas='';
//              // todos.musica='';
//              // todos.espacio='';
//              // todos.estado='';
// dia = new Date();
//  var b = dia.getDate();
//  todos.fecha= b;
// todos.b = [{"nombre":"El REY","grupo":"Veneno","hora":"23:00","imag":"header2.jpg","bebidas":"Wiski, Ron, Cerveza, Jarras","espacio":"disponible","precio":"45","musica":"Tropical"},{"nombre":"KARAOKE 1,2,3","grupo":"El Gran Matador","hora":"23:00","imag":"photo4.jpg","bebidas":"Wiski, Ron","espacio":"disponible","precio":"50","musica":"Tropical"}
//                         ,{"nombre":"Punto Clave","grupo":"La quinta Estación","hora":"22:00","imag":"photo2.png","bebidas":"Ron, Cerveza, Jarras","espacio":"no_disponible","precio":"25","musica":"Rock"}
//                         ,{"nombre":"OK","grupo":"Maldita Jaqueca","hora":"21:00","imag":"photo3.jpg","espacio":"disponible","precio":"20","musica":"Tropical"}];
              
//             // $http({
//             //     method:'GET',
//             //     url:'/api/buscar'
//             // }).then (function(data){
//             //     todos.a = data;
//             // },function(err){
//             //     res.send('data no encontrada');
//             // });

//          }]);

