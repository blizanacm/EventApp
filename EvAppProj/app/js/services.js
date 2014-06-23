var eventAppServices = angular.module('EventAppServices', []);

eventAppServices.factory('EventDataService', function($resource){
    var resource = $resource('/data/events/:id', {id: '@id'});
    var getAll = function(){
        return resource.query();
    };
    return {
        getAllEvents: getAll
    };
});