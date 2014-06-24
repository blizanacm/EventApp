var eventAppControllers = angular.module('EventAppControllers', []);

eventAppControllers.controller('HomeCtrl', function($scope, EventDataService) {
    /*EventDataService.getAllEvents().then(function(data){
        console.log(data);
        $scope.events = data;
    }, function(data){});*/

    $scope.events = EventDataService.getAllEvents();
});

eventAppControllers.controller('CreateEventCtrl', function($scope) {

});

//$scope.events = EventService.getAllEvents();