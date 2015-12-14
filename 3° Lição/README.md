3 Controladores (Controllers)?
========

A expressão mais correta para controlador (Controller) é uma  função construtora, que é usada para ampliar o scope (âmbito) do angular. 

Quanto um Controller é anexado ao DOM (Interface, Tela) através da directiva ng-controller, o framework irá instanciar um novo objeto controller usando uma função de construtor expecifica para controllers um novo scope (âmbito) será criado e disponibilisado como um parâmetro injetável.

#Modos de uso:


- Certo.
	Configure o estado inicial do objeto $scope.
	Adicionar comportamento ao objeto $scope.
- Errado.
	Manipular DOM - Os controladores devem conter apenas a lógica de negócios. Colocar qualquer lógica de apresentação em Controladores afeta significativamente a sua capacidade de teste. Angular tem ligação de dados para a maioria dos casos e diretrizes para encapsular manipulação DOM manual.
	A introdução do formato - forma angular usam controles em seu lugar.
	Filtro de saída - Use filtros angulares em vez disso.
	Código de ação ou estado entre controladores - Use serviços angulares em vez disso.
	Gerenciar o ciclo de vida de outros componentes (por exemplo, para criar instâncias de serviço).	

#Configurando um estado inicial de um Objeto do tipo $scope:
	Normalmente precisamos configurar um estado inicial para um objeto, para configurar isto basta vincular ao objeto $scope um atributo, assim todos atributos ou objetso, arrays... serão vinculados ao DOM. 

  ```js
	var myApp = angular.module('myApp',[]);

	myApp.controller('MyController', ['$scope', function($scope) {
	  $scope.myVarScope = 'Hola!';
	}]);
	```
    <html>
    <body>   	
		<div ng-controller="MyController">
			{{ myVarScope }}
		</div>
    </body>
    </html>

Mais informações em [AngularJS - Controllers ](https://docs.angularjs.org/guide/controller).
