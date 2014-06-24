var eventAppServices = angular.module('EventAppServices', []);

eventAppServices.factory('EventDataService', function($resource, $q){
    var resource = $resource('/app/data/events/:id', {id: '@id'}, {'query': {method: 'GET', isArray: false}});
    var getAll = function(){
        /*var deferred = $q.defer();
        resource.get({id: '1.json'}, function(data){
            deferred.resolve(data);
        }, function(data){
            deferred.reject(data);
        });

        return deferred.promise;*/

        return resource.query();
    };
    return {
        getAllEvents: getAll
    };
});