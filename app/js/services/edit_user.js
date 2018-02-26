'use strict';

angular.module('payeAPPLICATION-NAME.services')
  .factory('EditUser', ['$rootScope', '$resource', 'apiUrl',
    function($rootScope, $resource, apiUrl) {

      var urlResource = apiUrl + '/users';

      return $resource(urlResource, {}, {
        new: {
          url: urlResource,
          method: 'PUT'
        }
      });
    }
  ]);
