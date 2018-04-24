(function() {
    'use strict';
    angular.module('app')
        .factory('movieService', movieService);

    movieService.$inject = ['$http', '$q'];

    function movieService($http, $q) {
        var movieService = {};

        movieService.getDetails = function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: '/scripts/movies.json'
            }).then(function successCallback(response) {
                deferred.resolve(response);
                //console.log(response)
            }, function errCallback(response) {
                deferred.reject(response);
                //console.log(response)
            });
            return deferred.promise;
        }
        return movieService;
    }
})();