var app = angular.module('overeasyDocs-app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider) {  

    $routeProvider
        .when('/', { templateUrl: 'views/home.html' } )
        .when('/getting-started', { templateUrl: 'views/getting-started.html' } )
        .when('/grid', { templateUrl: 'views/grid.html' } )
        .when('/flex', { templateUrl: 'views/flex.html' } )
        .when('/whitespace', { templateUrl: 'views/whitespace.html' } )
        .when('/layout', { templateUrl: 'views/layout.html' } )
        .when('/typography', { templateUrl: 'views/typography.html' } )
        .when('/colors', { templateUrl: 'views/colors.html' } )
        .when('/backgrounds', { templateUrl: 'views/backgrounds.html' } )
        .when('/borders', { templateUrl: 'views/borders.html' } )
        .when('/buttons', { templateUrl: 'views/buttons.html' } )
        .when('/input-fields', { templateUrl: 'views/input-fields.html' } )
        .when('/configure', { templateUrl: 'views/configure.html' } )
        .otherwise( { redirectTo: '/' } );

}]);
