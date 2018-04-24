(function(){
	'use strict';
		angular.module('app')
				.controller('profileController', profileCtrl);

		profileCtrl.$inject = ['$scope','$location','$rootScope'];

		function profileCtrl($scope,$location,$rootScope){
			
			$scope.muser = localStorage.getItem('userName');
				
			//$rootScope.isUserLoggedIn = true;	
			$("#userLogOut").click(function(){
				
				$rootScope.isUserLoggedIn = false
			});
				

		}			
})();