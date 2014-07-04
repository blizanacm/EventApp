var eventAppFilters = angular.module('EventAppFilters', []);

eventAppFilters.filter('hours', function() {
    return function(duration) {
        if (duration == 1) {
            return duration + " hr";
        } else {
            return duration + " hrs";
        }
    };
});