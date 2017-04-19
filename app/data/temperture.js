'use strict';

var USERNAME = 'key-1';
var SECRET   = 'tmGMHm3DzWZ3HWXJuszr';
var BASE_URL = 'https://api.fieldbook.com/v1/58f6994ac519c20300480190/tempertures';

angular.module('data.temperture', ['ngResource'])

.factory('temperture', ['$resource',
    function($resource) {
      debugger;
      var tempertureService = $resource('https://api.fieldbook.com/v1/58f6994ac519c20300480190/tempertures/:tempertureId',
        {
          tempertureId: '@tempertureId',
        }
      );

      return tempertureService;
    }]);
