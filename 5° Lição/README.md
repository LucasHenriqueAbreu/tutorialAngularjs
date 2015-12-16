
No Angular as templates são escritas com HTML, as templates contem Angular-specific, que são elementos e atributos específicos.
O Angular combina o tamplate com as informações do model e controller para ser renderizada as views que o usuario vai ver no browser, de forma dinamica.

Tipos de elementos angualr que podemos usar:

* Directive —Um atributo ou elemento que  aumenta um elemento DOM existente ou representa um componente DOM reutilizável.
* Markup — A dupla notação de chaves `{{}}` serve para ligar expressões
  a elementos está embutido na marcação Angular, ou seja variáveis de scopo.
* Filter — Formata dados no DOM.
* Form controls — Valida a entrada de dados do usuário.


```html
<html ng-app>
 <!-- Tag body aumentada com directiva ngController (cria ligação com o controlador) -->
 <body ng-controller="MyController">
   <input ng-model="foo" value="bar">
   <!-- Tag botão com a directiva ng-clique 'buttonText'
           que esta dentro de:"{} {}" marcação -->
   <button ng-click="changeFoo()">{{buttonText}}</button>
   <script src="angular.js">
 </body>
</html>
```
