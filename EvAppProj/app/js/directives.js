var eventAppDirectives = angular.module('EventAppDirectives', []);

eventAppDirectives.directive('datePicker', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).datepicker();
        }
    }
});

eventAppDirectives.directive('sessionThumb', function(){
    return {
        restrict: 'E',
        templateUrl: 'partials/directives/sessionThumb.html',
        replace: true,
        scope: {
            session: "=session"
        }
    }
});
