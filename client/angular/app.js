    var myApp = angular.module('myApp', ['ngRoute']);
    //  use the config method to set up routing:
    myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/home.html'
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
