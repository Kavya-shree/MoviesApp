(function() {
    'use strict';
    angular.module('app')
        .controller('seatSelectionController', seatSelectionCtrl);

    seatSelectionCtrl.$inject = ["$scope", "$location", "$window"];

    function seatSelectionCtrl($scope, $location, $window) {

        $scope.movieName = localStorage.getItem('movieTitle');
        $scope.movieDay = localStorage.getItem('Week');
        $scope.movieTime = localStorage.getItem('time');
        $scope.movieSeatingClass = localStorage.getItem('seatingClass');

        $scope.assetTypeList = [{
            id: 1,
            checked: false
        }, {
            id: 2,
            checked: false
        }, {
            id: 3,
            checked: false
        }, {
            id: 4,
            checked: false
        }];
        $scope.selectNum = function(key) {
            $scope.seatNumber = key.id
            $scope.seatSelected = function() {
                $scope.selectedSeats = key.id;
                localStorage.setItem('seats', $scope.selectedSeats);
                $scope.numOfSeats = true;


            }

        }
        $scope.editMovieDay = function() {
            $window.history.back(); /*When user click on Go Back link the controller function is called and it will go back to previous route*/
        }

        $scope.sms = function() {

            $scope.smsVal = "sms";

            if ($scope.bookingConfirm == $scope.smsVal) {
                $scope.phnumberHide = true;
            }

        }

        $scope.eTickect = function() {
            $scope.eTickectVal = "eTickect";
            if ($scope.bookingConfirm == $scope.eTickectVal) {
                $scope.phnumberHide = false;
            }
        }

        $scope.redirectToSuccess = function() {


            if ($scope.bookingConfirm == undefined) {
                $scope.errorMesg = true;
            } else {
                localStorage.setItem('eTick', $scope.bookingConfirm);
                $location.url('/Success');
            }

        }
    }

})();