(function() {
    'use strict';
    angular.module('app')
        .directive('validForm', validForm)
        .directive('onClickUserLogOut', onClickUserLogOut);

    function validForm() {
        return {
            require: '?ngModel',
            link: function(scope, element, attrs, ngModelCtrl) {

                console.log("HI", attrs.type);
                if (!ngModelCtrl) {
                    return;
                }

                if (attrs.type == "text") {
                    ngModelCtrl.$parsers.push(function(val) {
                        if (angular.isUndefined(val)) {
                            var val = '';
                        }
                        var clean = val.replace(/[^a-zA-Z ]/g, '');
                        if (val !== clean) {
                            ngModelCtrl.$setViewValue(clean);
                            ngModelCtrl.$render();
                        }
                        return clean;
                    });
                }

                if (attrs.type == "email") {
                    ngModelCtrl.$parsers.push(function(val) {
                        if (angular.isUndefined(val)) {
                            var val = '';
                        }
                        var clean = val.replace(/[^A-Za-z0-9@.]+/g, '');
                        if (val !== clean) {
                            ngModelCtrl.$setViewValue(clean);
                            ngModelCtrl.$render();
                        }
                        return clean;
                    });
                }
                
                if (attrs.type == "number") {
                    ngModelCtrl.$parsers.push(function(val) {
                        if (angular.isUndefined(val)) {
                            var val = '';
                        }
                        var clean = val.toString().replace(/[^0-9]+/g, '');
                        if (val !== clean) {
                            ngModelCtrl.$setViewValue(clean);
                            ngModelCtrl.$render();
                        }
                        return clean;
                    });
                }

            }
        };
    }

    function onClickUserLogOut(){
         return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                alert('yup');
                scope.isUserLoggedIn = false;
            });
        }
    };
    }

})();