(function() {
    'use strict';
    angular.module('app')
        .controller('successController', successCtrl);

    successCtrl.$inject = ['$scope','$rootScope'];

    function successCtrl($scope,$rootScope) {
        $('body').attr('id', 'successPagePadding');
        var eTickect = localStorage.getItem('eTick');
       
        $scope.numOfSeats = localStorage.getItem('seats');
        
        var movieTitle = localStorage.getItem('movieTitle');
       
        $scope.bookingID = Math.round((Math.random() * 10) * 10);

        $scope.price = localStorage.getItem('movieFare');
        $scope.totalAmount = $scope.numOfSeats * $scope.price;

        $scope.randomSeatNumArry = [];
         var num = (Math.ceil(Math.random() * 200));
        for(var i=0; i<$scope.numOfSeats;i++ ){
        	 if (num > 0) {
                    num = num + 1;
                }
        	$scope.randomSeatNumArry.push(num);
        	
        }
       
        if (eTickect == "eTickect") {
            var qrcode = new QRCode(document.getElementById("qrcode"), {
                text: movieTitle,
                width: 128,
                height: 128,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            });

            qrcode.makeCode(movieTitle);


        } else {
            console.log("False");
        }

    }
})();