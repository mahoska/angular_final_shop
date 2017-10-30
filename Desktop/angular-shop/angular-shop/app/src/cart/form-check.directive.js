angular.module('app')
.directive('overwriteEmail', function() {
    var EMAIL_REGEXP = /^[\.\-_A-Za-z0-9]+?@[\.\-A-Za-z0-9]+?(\.)[A-Za-z0-9]{2,3}$/i;
  
    return {
      require: '?ngModel',
      link: function(scope, elm, attrs, ctrl) {
        // only apply the validator if ngModel is present and AngularJS has added the email validator
        if (ctrl && ctrl.$validators.email) {
  
          // this will overwrite the default AngularJS email validator
          ctrl.$validators.email = function(modelValue) {
            return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
          };
        }
      }
    };
  });
  