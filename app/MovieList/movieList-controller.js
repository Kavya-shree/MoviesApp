(function() {
    'use strict';
    angular.module('app')
        .controller('movieListController', MovieListCtrl);

    MovieListCtrl.$inject = ['$scope', 'movieService','$rootScope'];

    function MovieListCtrl($scope, movieService,$rootScope) {
  if($rootScope.isUserLoggedIn == true){
            console.log("true")
            $rootScope.notLogedIn = false;
            $rootScope.disabled = false;
        }
        else{
            $rootScope.notLogedIn = true;
            $rootScope.disabled = true;
            //$location.url('/Login');
        }
        movieService.getDetails()
            .then(
                function successCallback(response) {

                    $scope.movieList = response.data;
                },
                function errCallback(response) {
                    //console.log(response);
                });
            
    }
})();