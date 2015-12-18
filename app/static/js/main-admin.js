(function(){
  angular.module("ADMIN", [])
    .directive('principaladmin',function(){
      return {
        restrict: 'E',
        templateUrl : '/static/directives/principal-admin.html',
        controller: 'PrincipalController',
      }
    })
    .directive('usuarios',function(){
      return {
        restrict: 'E',
        templateUrl : '/static/directives/usuarios.html',
        controller: 'UsuariosController',
      }
    })
    .controller('FlowController', function($scope){
        $scope.userType = 0;
        $scope.tab = 0;
        $scope.setTab = function(x) {
            $scope.tab = x;
        }

    })
    .controller('PrincipalController', function($scope){

    })
    .controller('UsuariosController', function($scope){

    })
    .config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[');
    $interpolateProvider.endSymbol(']}');
  }])
})()







