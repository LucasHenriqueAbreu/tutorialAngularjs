Módulos (Mudule)?
========

Vamos pensar que "Module" modulo é container para diferentes partes de nossa aplicação, ele vai ligar todas a partes a um projeto só... podemos ligar controllers, filters, factorysm, directive, etc...

Grande parte das aplicações tem um metodo principal que instancia diferentes partes de uma aplicação e liga elas.
Aplicações angular não tem um metodo principal! Em vez disso temos o  modulo que é o que define como deve ser uma aplicação em sua inicialização.
#Vantagens:

- Processo de declaração de dependencias é mais fácil de entender.
- Você pode empacotar o código com módulos reutilizaveis .
- Os modulos podes ser carregados em muitas ordens (ou em parealelo).
- Os testes unitários tendem a carregar módulos relevantes a eles para que sejam ágeis.
- Testes end-to-end pode usar para substituir módulos de configuração.

## Primeiro teste com modulos.

  ```js
   	// declara o modulo
	var myAppModule = angular.module('myApp', []);

	// configura o modulo.
	//neste exemplo vamos carregar o filtro (helloFilter).
	myAppModule.filter('helloFilter', function() {
	 return function(name) {
	    return 'Hello, ' + name + '!';
	  }; 
	});
```
    <html>
    <body>
   	
   	<div ng-app="myApp">
	  <div>
	    {{ 'World' | greet }}
	  </div>
	</div>

	<script src=".bower_components/bower-angularjs/angular.js"></script>
	<script src="js/app.js"></script>
    </body>
    </html>
