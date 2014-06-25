var eventAppServices = angular.module('EventAppServices', []);

eventAppServices.factory('EventDataService', function($http, $q){
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

        $http.get('/app/data/events.json').success(function(events){
            for(var i = 0; i < events.length; i++) {
                if(eventId == events[i].id) {
                    deferred.resolve(events[i]);
                    break;
                }
            }
        }).error(function(data){
            deferred.reject(data);
        });

        return deferred.promise;
    };

    return {
        getAllEvents: getAll,
        getEventById: getById
    };
});