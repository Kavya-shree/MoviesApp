(function() {
    'use strict';
    angular.module('app')
        .controller('signUpController', SignUpCtrl);

    SignUpCtrl.$inject = ['$scope','$rootScope'];

    function SignUpCtrl($scope,$rootScope) {

        $rootScope.isUserLoggedIn = false;
        $scope.saved = localStorage.getItem('todos');
        $scope.todos;
        if ((localStorage.getItem('todos') !== null)) {
            $scope.todos = JSON.parse($scope.saved);
        } else {
            $scope.todos = [];
        }

        var oldTodos = $scope.todos;

        $scope.signupFormSubmit = function() {
            //var todos = [];
            $scope.todos.push({
                fname: $scope.firstName,
                lname: $scope.lastName,
                email: $scope.email,
                pwd: $scope.password,
                ph: $scope.phoneNumber
            });

            $scope.firstName = '';
            $scope.lastName = '';
            $scope.email = '';
            $scope.phoneNumber = '';
            $scope.showAlert = true;
            $scope.successTextAlert = "Registerd Successfully.";

            $scope.switchBool = function() {

                $scope.showAlert = false;
            }

            localStorage.setItem('todos', JSON.stringify($scope.todos));
        };

    }

})();