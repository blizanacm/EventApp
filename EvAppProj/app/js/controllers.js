var eventAppControllers = angular.module('EventAppControllers', []);

eventAppControllers.controller('HomeCtrl', function($scope, EventDataService) {
    if (eventsArray == null || eventsArray.length == 0) {
        EventDataService.getAllEvents().then(function(data) {
            eventsArray = data;
            $scope.events = eventsArray;
        }, function(data) {});
    } else {
        $scope.events = eventsArray;
    }
});

eventAppControllers.controller('EventDetailsCtrl', function($scope, $routeParams, EventDataService) {
    EventDataService.getEventById($routeParams.eventId).then(function(data){
        $scope.event = data;
    }, function(data) {});
});

eventAppControllers.controller('CreateEventCtrl', function($scope, EventDataService) {
    $scope.saveEvent = EventDataService.saveEvent;
    $scope.cancelCreate = EventDataService.cancelCreate;
});
