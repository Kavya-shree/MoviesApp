(function(){
	'use strict';
	angular.module('app', ['ngRoute'])
			.config(config);	

	config.$inject = ['$routeProvider', '$locationProvider'];
	
	function config($routeProvider, $locationProvider){
		$routeProvider
			.when('/Login', {
				templateUrl : 'Login/login-view.html',
				controller: 'loginController'
			})
			.when('/SignUp', {
				templateUrl: 'SignUp/signup-view.html',
				controller: 'signUpController'
			})
			.when('/Profile', {
				templateUrl: 'Profile/profile-view.html',
				controller: 'profileController'
			})
			.when('/', {
				templateUrl: 'Home/home-view.html',
				controller: 'homeController'
			})
			.when('/MovieList', {
				templateUrl: 'MovieList/movie-list-view.html',
				controller: 'movieListController'
			})
			.when('/Booking/:movieId',{
				templateUrl: '/Booking/booking-view.html',
				controller: 'bookController'
			})
			.when('/SeatSelection',{
				   templateUrl: '/SeatSelection/seat-selection-view.html',
				   controller: 'seatSelectionController'
			})
			.when('/Success', {
					templateUrl: 'Success/success-view.html',
					controller: 'successController'
			})
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
	}		

})();


