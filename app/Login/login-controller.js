(function() {
    'use strict';
    angular.module('app')
        .controller('loginController', LoginCtrl);

    LoginCtrl.$inject = ['$scope','$location', '$rootScope'];

    function LoginCtrl($scope,$location,$rootScope) {

         $rootScope.isUserLoggedIn = false;
        $scope.saved = localStorage.getItem('todos');
        $scope.savedval = JSON.parse($scope.saved);
        
        $scope.loginSubmit = function() {

            $scope.lEmail = $scope.loginEmail;
            $scope.lPwd = $scope.loginPassword;

            localStorage.setItem('userName', $scope.loginEmail);

            for(var i = 0; i < $scope.savedval.length; i++ ){
            	if($scope.savedval[i].email == $scope.loginEmail && $scope.savedval[i].pwd == $scope.loginPassword && $scope.loginEmail != undefined && $scope.loginPassword != undefined){
            		  
                    
                      $rootScope.isUserLoggedIn = true;
            		  $location.path('/Home');
            	}
            	else{
            		
            	     $scope.loginInValid = true;
            		 $scope.loginInValidMesg = "Invaild User."

            		 $scope.cancel = function(){
            		 	$scope.loginInValid = false;
            		 }
            	}
            }

        }
    }
})();