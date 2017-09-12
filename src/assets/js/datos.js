var ngDllsController = angular.module('ngDllsController', []);

      ngDllsController.controller('DllsController',['$scope',function($scope,$http){
           var todos = $scope;
            todos.a = [];
            todos.nombre='Rodrigo Quiroz';
            todos.grupo='Rodrigo Quiroz';
            todos.hora='Rodrigo Quiroz';

              
            // $http({
            //     method:'GET',
            //     url:'/api/buscar'
            // }).then (function(data){
            //     todos.a = data;
            // },function(err){
            //     res.send('data no encontrada');
            // });

         }]);