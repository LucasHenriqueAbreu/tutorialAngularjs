#1 O que é Angular.js;
============================================================================================================================
		AngularJS é um framework para dinamicas aplicações web, nele usaremos o HTML como linguagem principal, podendo usar como linguagem principal na montagem de nossas telas. O data binding do Angular juntamente com a injeção de dependencias fazem você economizar uma grande quantidade de código fonte que vai precisar desenvolver e tudo isso executando no browser. 

		Angular ensina o navegador nova sintaxe através de uma construção que chamamos de directivas. Os exemplos incluem:

		* Ligação de dados, como em {{}}.
		* Estruturas de controle DOM para repetir, mostrar e ocultar fragmentos DOM.
		* Suporte para formulários e validação de formulário.
		* Colocar novo comportamento de elementos DOM, como a manipulação de eventos DOM.
		* Agrupamento de HTML em componentes reutilizáveis.

##1.2 Visão geral conceitual;
		Na lista abaixo contém alguns dos conceitos mais importantes do angular:

		Template - 		HTML com marcação adicional;
		Directivas - 	estendem HTML com atributos personalizados e elementos;
		Model -  		os dados mostrados para o usuário na view e com os quais interage usuário;
		Scope -	 		contexto onde o modelo é armazenado para que os controladores, directivas e expressões podem acessá-lo;
		Expressions -	acessar as variáveis e funções do âmbito de aplicação;
		Compiler - 		analisa o modelo e instancia directivas e expressões;
		Filter -		formata o valor de uma expressão para mostrar ao usuário;
		View -			as telas ou o que o usuário vê (DOM);
		Data Binding -	os dados sincronizados entre o model e a view;
		Controller - 	da lógica de negócios por trás de cada view;
		Dependency 		
		Injection -		Cria a ligação entre Objeto e funções;	
		Injector -		Injeta dependências;
		Module -		um módulo para as diferentes partes de um aplicativo, incluindo os controladores, serviços, filtros, directivas. Faz a ligação de todas as partes da aplicação angular e configura o Injector;
		Service -		lógica de negócios reutilizável independente de pontos de vista;

	## Primeiro teste com Data Binding

		<html>
		    <body>
			<div ng-app ng-init="qty=1;cost=2">
			  <b>Invoice:</b>
			  <div>
			    Quantity: <input type="number" min="0" ng-model="qty">
			  </div>
			  <div>
			    Costs: <input type="number" min="0" ng-model="cost">
			  </div>
			  <div>
			    <b>Total:</b> {{qty * cost | currency}}
			  </div>
			</div>
		 </body>
		</html>