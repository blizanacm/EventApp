var eventAppControllers = angular.module('EventAppControllers', []);

eventAppControllers.controller('HomeCtrl', function($scope, EventDataService) {
    /*EventDataService.getAllEvents().then(function(data){
        console.log(data);
        $scope.events = data;
    }, function(data){});*/
    EventDataService.getAllEvents().then(function(data) {
        $scope.events = data;
    }, function(data) {

    });
});

eventAppControllers.controller('EventDetailsCtrl', function($scope, $routeParams, EventDataService) {
    EventDataService.getEventById($routeParams.id).then(function(data){
        $scope.event = data;
    }, function(data) {});
});

eventAppControllers.controller('CreateEventCtrl', function($scope) {

});

//$scope.events = EventService.getAllEvents();