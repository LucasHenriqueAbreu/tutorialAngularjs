1 Módulos (Mudule)?
========

Vamos pensar que "Module" modulo é container para diferentes partes de nossa aplicação, ele vai ligar todas a partes a um projeto só... podemos ligar controllers, filters, factorysm, directive, etc...

Grande parte das aplicações tem um metodo principal que instancia diferentes partes de uma aplicação e liga elas.
Aplicações angular não tem um metodo principal! Em vez disso temos o  modulo que é o que define como deve ser uma aplicação em sua inicialização.

#Vantagens:

- Processo de declaração de dependencias é mais fácil de entender.
- Você pode empacotar o código com módulos reutilizaveis.
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
	    {{ 'World' | helloFilter }}
	  </div>
	</div>

	<script src=".bower_components/bower-angularjs/angular.js"></script>
	<script src="js/app.js"></script>
    </body>
    </html>

## 2.1 Injeção de dependência
O processo de Injeção de dependências (DI - Dependency Injection) é um design pattern, que é responsável por controlar como os componentes lidam com suas dependências. O injector do angular é responsável pela criação de componentes e suas dependências, proporcionando-lhes a outros componentes como for necessário. Usando Dependency Injection:

- Você pode usá-lo na definição de componentes ou no provider de execução e configuração blocos para um módulo.
- Componentes como serviços, directivas, filtros e animações são definidos por um método de fábrica injetável ou função construtora. Esses componentes podem ser injectados com componentes "services" e  "value" como dependências.
- Os controladores são definidas por uma função construtora, que pode ser injectado com qualquer de "services" e "componentes", como dependências de valor, mas também pode ser fornecido com dependências especiais.
- O método run aceita uma função, que pode ser injetado com "service", "value" e componentes "constant" como dependências. Observe que você não pode injetar "providers" em blocos executados.
- O método de configuração aceita uma função, que pode ser injetado com "provider" e componentes "constant" como dependências. Observe que você não pode injetar "service" ou componentes "value" em configuração.
Veja Módulos para mais detalhes sobre funcionamento e configuração blocos

# 2.1.1 Métodos factory:

A maneira como você define uma directiva, serviço ou filtro é com uma função factory. Os métodos factory são registrados com módulos. A maneira recomendada de factory é:

```js
	var app = angular.module('myModule', []);

	app.factory('serviceId', ['depService', function(depService) {
	  // ...
	}]);

	app.directive('directiveName', ['depService', function(depService) {
	  // ...
	}]);

	app.filter('filterName', ['depService', function(depService) {
	  // ...
	}]);
```
# 2.1.2 Métodos de módulo:

Podemos especificar funções para executar a configuração e tempo de execução para um módulo, chamando os métodos de configuração e execução. Estas funções são injetável com dependências assim como as funções factory.

```js

	var app = angular.module('myModule', []);
	app.config(['depProvider', function(depProvider) {
	  // ...
	}]);
	app.run(['depService', function(depService) {
	  // ...
	}]);


```
# 2.1.3 Controllers:

Controllers são "classes" ou "funções contrutoras" que são responsaveis por fornecer a aplicação que esta anotada como utilizadora daquele controller.
```js

	app.controller('MyController', ['$scope', 'dep1', 'dep2', function(scope, dep1, dep2) {
	  ...
	  scope.aMethod = function() {
	    ...
	  }
	  ...
	}]);


```
Estas são formas básicas de da utilização de DI em angularJS, exitem várias várias outra possíbilidades e funcionalidades do Dependency Injection no angularjs, porém não veremos aqui neste tutorial podemos consultar melhor estas informações em [AngularJS - Dependency Injection ](https://docs.angularjs.org/guide/di).
