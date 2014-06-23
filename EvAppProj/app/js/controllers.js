var eventAppControllers = angular.module('EventAppControllers', []);

eventAppControllers.controller('HomeCtrl', function($scope, EventDataService) {
    $scope.events = EventDataService.getAllEvents();
});

eventAppControllers.controller('CreateEventCtrl', function($scope) {

});

//$scope.events = EventService.getAllEvents();