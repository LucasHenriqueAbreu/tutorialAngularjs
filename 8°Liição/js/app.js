var myApp = angular.module('myApp',[]);

myApp.controller('MyController', ['$scope', function($scope) {
  $scope.myVarScope = 'Hola!';
  

  $scope.double = function(value) { 
  	return value * 2; 
  };
}]);