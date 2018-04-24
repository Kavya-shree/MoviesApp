(function() {
    'use strict';
    angular.module('app')
        .controller('homeController', HomeCtrl);

    HomeCtrl.$inject = ['$scope', 'movieService'];

    function HomeCtrl($scope, movieService) {
        $scope.quantity = 3
        movieService.getDetails()
            .then(
                function successCallback(response) {
                  //  console.log(response);
                    $scope.movieItems = response.data
                },
                function errCallback(response) {
                  //  console.log(response);

                });
            
    		}
})();