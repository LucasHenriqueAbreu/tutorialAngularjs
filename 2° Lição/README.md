Módulos (Mudule)?
========

AngularJS é um framework para dinamicas aplicações web, nele usaremos o HTML como linguagem principal, podendo usar como linguagem principal na montagem de nossas telas. O data binding do Angular juntamente com a injeção de dependencias fazem você economizar uma grande quantidade de código fonte que vai precisar desenvolver e tudo isso executando no browser. 
Angular ensina o navegador nova sintaxe através de uma construção que chamamos de directivas. Os exemplos incluem:

	 Ligação de dados, como em {{}}.
	 Estruturas de controle DOM para repetir, mostrar e ocultar fragmentos DOM.
	 Suporte para formulários e validação de formulário.
	 Colocar novo comportamento de elementos DOM, como a manipulação de eventos DOM.
	 Agrupamento de HTML em componentes reutilizáveis.

##1.2 Visão geral conceitual;
Na lista abaixo contém alguns dos conceitos mais importantes do angular:
		
- Template - HTML com marcação adicional
- Directivas - estendem HTML com atributos personalizados e elementos


## Primeiro teste com Data Binding

    <html>
    <body>

     	<div ng-app ng-init="quantidade=1;custos=2">
	  <b>Fatura:</b>
	  <div>
	    Quantidade: <input type="number" min="0" ng-model="quantidade">
	  </div>
	  <div>
	    Custos: <input type="number" min="0" ng-model="custos">
	  </div>
	  <div>
	    <b>Total:</b> {{quantidade * custos | currency}}
	  </div>
	</div>
	<script src=".bower_components/bower-angularjs/angular.js"></script>

    </body>
    </html>
