# Services

Os services do angular são subistituíveis que estão ligados entre si. Você pode usar os serviços para organizar e compartilhar código em seu aplicativo.

Services são:

* Simples instanciação - O Angular só vai instanciar um service quando a aplicação depender dele.
* Singletons – Cada componte depende de apenas uma referência de uma única instância gerada pela factory de um service.

Angular oferece varios services úteis com o $http, porém para muitas aplicações vamos precisar criar nossos services.


## Usando um service

Para usar um service do Angular,voce adiciona como uma dependencia para o componente (controller, service,
filter ou directive) que depende do service. O sistema de injeção de dependência do Angular cuida do resto.

    <div id="simple" ng-controller="MyController">
      <p>Simples notificação </p>
      <input ng-init="message='test'" ng-model="message" >
      <button ng-click="callNotify(message);">NOTIFY</button>
      <p>(você tem que clicar 3 vezes para ver um alerta)</p>
    </div>

 ```js
    angular.
     module('myServiceModule', []).
      controller('MyController', ['$scope','notify', function ($scope, notify) {
        $scope.callNotify = function(msg) {
          notify(msg);
        };
      }]).
     factory('notify', ['$window', function(win) {
        var msgs = [];
        return function(msg) {
          msgs.push(msg);
          if (msgs.length == 3) {
            win.alert(msgs.join("\n"));
            msgs = [];
          }
        };
      }]);
```


## Criando services
A função factory function gera um unico objeto ou função que representa o service de rest da aplicação. 
O objeto ou função retornada pelo serviço é injetado em qualquer compontete(controller, service, filter or directive) que especifica uma dependência
no serviço.

### Registrando serviços 
Services são registrados para modulos via angular module.


