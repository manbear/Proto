'use strict';

angular.module('protoApp', [
	'ui.codemirror',
	'siyfion.ngTypeahead'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CodeCtrl'
      })
  });
