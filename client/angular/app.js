    var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);
    //  use the config method to set up routing:
    myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/main.html'
        })
        .when('/quote',{
            templateUrl: 'partials/quote.html'
        })
        .when('/services',{
            templateUrl: 'partials/services.html'
        })
        .when('/faq',{
            templateUrl: 'partials/faq.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
