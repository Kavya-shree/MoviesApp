(function() {
    'use strict';
    angular.module('app')
        .directive('editor', editor);


    function editor() {
        return {
            require: "?ngModel",
            scope: {
    			model: '=ngModel'
				},
            template: "<input type='text' class='form-control' ng-model='value' ng-change='onChange()'>",
            link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return;
                scope.onChange = function() {
                	var clean = scope.value.replace( /[^A-Za-z\s]+/g, '');

                    ngModel.$setViewValue(clean);
                    scope.$parent.$modelValue = ngModel.$viewValue;
                };
                ngModel.$render = function() {
                    scope.value = ngModel.$modelValue;
                };
            }
           /* link: function(scope, element, attrs, ngModelCtrl) {
          if(!ngModelCtrl) {
            return; 
          }
          scope.onChange = function(){
          	ngModelCtrl.$parsers.push(function(value) {
            if (angular.isUndefined(value)) {
                var value = '';
            }

            var clean = scope.value.replace( /[^A-Za-z\s]+/g, '');   
            if (value !== clean) {
              ngModelCtrl.$setViewValue(clean);
              ngModelCtrl.$render();
            }
            return clean;
          });
          }
          

          element.bind('keypress', function(event) {
            if(event.keyCode === 32) {
              event.preventDefault();
            }
          });
        }*/

        };
    }

})();