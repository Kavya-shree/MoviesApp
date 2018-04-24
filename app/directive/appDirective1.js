(function() {
    'use strict';
    angular.module('app')
        .directive('validName', validName)
        .directive('validNumber', validNumber)
        .directive('validEmail', validEmail);

    function validName() {
      return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
          if(!ngModelCtrl) {
            return; 
          }

          ngModelCtrl.$parsers.push(function(val) {
            if (angular.isUndefined(val)) {
                var val = '';
            }
            var clean = val.replace( /[^a-zA-Z ]/g, '');   
            if (val !== clean) {
              ngModelCtrl.$setViewValue(clean);
              ngModelCtrl.$render();
            }
            return clean;
          });

         
        }
      };
    }

    function validNumber() {
      return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
          if(!ngModelCtrl) {
            return; 
          }

          ngModelCtrl.$parsers.push(function(val) {
            if (angular.isUndefined(val)) {
                var val = '';
            }
            var clean = val.replace( /[^0-9]+/g, ''); 
            if (val !== clean) {
              ngModelCtrl.$setViewValue(clean);
              ngModelCtrl.$render();
            }
            return clean;
          });

          
        }
      };
    }

    function validEmail() {
      return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
          if(!ngModelCtrl) {
            return; 
          }

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
      };
    }

})();