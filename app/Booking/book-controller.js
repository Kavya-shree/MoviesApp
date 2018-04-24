(function() {
    'use strict';
    angular.module('app')
        .controller('bookController', bookCtrl);

    bookCtrl.$inject = ['$scope', 'movieService', '$routeParams', '$location','$rootScope'];

    function bookCtrl($scope, movieService, $routeParams, $location,$rootScope) {

        var week = localStorage.getItem('Week');
        console.log("Week", week);
        var seatingClass = localStorage.getItem('seatingClass');
        console.log("seatingClass", seatingClass);
        var movieTitle = localStorage.getItem('movieTitle');
        console.log("movieTitle", movieTitle);

        $scope.weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        movieService.getDetails()
            .then(
                function successCallback(response) { 

                    $scope.movieId = $routeParams.movieId;
                    $scope.movieDetail = response.data;
                    $scope.movieTitle = $scope.movieDetail[$scope.movieId].title;




                    $scope.date = new Date();
                    $scope.day = $scope.date.getDay();
                    $scope.currDate = $scope.date.getDate();



                    $scope.today = $scope.weeks[$scope.day];

                    $scope.newArryDay = [];

                    if ($scope.day < 5 && $scope.currDate > 0) {
                        var add = 0;
                        for (var i = $scope.day; i < 5; i++) {
                           var dte =  $scope.currDate + add
                            $scope.today = $scope.weeks[i];
                            $scope.obj={
                                week:$scope.today,
                                date:dte
                            };
                            $scope.newArryDay.push($scope.obj);
                           add = add + 1;
                        }

                    } else {
                        var add = 0;
                        for (var y = $scope.day; y < 7; y++) {
                          var dte =  $scope.currDate + add;
                            $scope.today = $scope.weeks[y];
                            $scope.obj={
                                week:$scope.today,
                                date:dte
                            };
                            $scope.newArryDay.push($scope.obj);
                            add = add + 1;
                           
                        }
                    }
                    

                    $scope.showTime = function(value) {
                        $scope.weekVal = value.week;
                        for (var x = 0; x < $scope.movieDetail.length; x++) {
                            for (var z = 0; z < $scope.movieDetail[x].Days.length; z++) {
                                var val = $scope.movieDetail[x].Days[z].key;
                                if (value.week == val) {

                                    $scope.mtime = $scope.movieDetail[x].Days[z].value
                                } else {

                                }
                            }
                        }
                       
                        localStorage.setItem('Week', $scope.weekVal);

                    }
                  

                    $scope.movieTime = function(data){
                       
                         localStorage.setItem('time', data);
                    }

                    $scope.seatingClass = function() {

                        if ($scope.result == undefined) {
                            $scope.seatingClassEmpty = true;
                           // $("#seatingModal").show();
                        } 
                        else {
                            console.log($scope.result);
                            $scope.seatingClassVal = $scope.result;
                            if($scope.seatingClassVal == 'gold'){
                                $scope.moviePrice = 150
                            }
                            else if($scope.seatingClassVal == 'silver'){
                                $scope.moviePrice = 100
                            }

                            $location.path('/SeatSelection');
                            $('.modal-backdrop').fadeOut();
                            

                            localStorage.setItem('seatingClass', $scope.seatingClassVal);
                            localStorage.setItem('movieFare', $scope.moviePrice);
                        }

                        $scope.cancel = function(){
                        $scope.seatingClassEmpty = false;
                     }

                    }

                    localStorage.setItem('movieTitle', $scope.movieTitle);

                },
                function errCallback(response) {

                });

    }
})();