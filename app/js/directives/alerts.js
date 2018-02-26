'use strict';

angular.module('payeAPPLICATION-NAME.directives')
  .directive('alerts', [function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/templates/alerts.html',
      scope: {
        messages: '=messages'
      }
    };
  }
]);
