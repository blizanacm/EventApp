var eventApp = angular.module('EventApp', [
    'ngRoute',
    'ngResource',
    'EventAppControllers',
    'EventAppServices',
    'EventAppFilters',
    'EventAppDirectives'
]);

eventApp.config(function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
    });
    $routeProvider.when('/createEvent', {
        templateUrl: 'partials/createEvent.html',
        controller: 'CreateEventCtrl'
    });
    $routeProvider.when('/event/:eventId', {
        templateUrl: 'partials/eventDetails.html',
        controller: 'EventDetailsCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
});
