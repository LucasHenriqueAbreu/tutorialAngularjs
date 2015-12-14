   	// declara o modulo
	var myAppModule = angular.module('myApp', []);

	// configura o modulo.
	//neste exemplo vamos carregar o filtro (helloFilter).
	myAppModule.filter('helloFilter', function() {
	 return function(name) {
	    return 'Hello, ' + name + '!';
	  };
	});