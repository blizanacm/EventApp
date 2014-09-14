var eventAppServices = angular.module('EventAppServices', []);

eventAppServices.factory('EventDataService', function($http, $q, $location){
    var getAll = function(){
        var deferred = $q.defer();

        $http.get('/app/data/events.json').success(function(data){
            deferred.resolve(data);
        }).error(function(data){
            deferred.reject(data);
        });

        return deferred.promise;
    };

    var getById = function(eventId) {
        var deferred = $q.defer();

        if(eventsArray == null || eventsArray.length == 0) {
            getAll().then(function(data){
                eventsArray = data;
                var event = null;

                for(var i = 0; i < eventsArray.length; i++) {
                    if(eventsArray[i].id == eventId) {
                        event = eventsArray[i];
                        break;
                    }
                }

                deferred.resolve(event);
            }, function(data){
                deferred.reject(data);
            });
        } else {
            var event = null;

            for(var i = 0; i < eventsArray.length; i++) {
                if(eventsArray[i].id == eventId) {
                    event = eventsArray[i];
                    break;
                }
            }

            deferred.resolve(event);
        }

        return deferred.promise;
    };

    var save = function(event, createEventForm){
        if(createEventForm.$valid) {
            event.id = eventsArray.length + 1;
            eventsArray.push(event);
            $location.path('/home');
        }
    };

    var cancelCreate = function(){
        $location.path('/home');
    };

    return {
        getAllEvents: getAll,
        getEventById: getById,
        saveEvent: save,
        cancelCreate: cancelCreate
    };
});
