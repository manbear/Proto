'use strict';

angular.module('protoApp', ['ui.codemirror'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CodeCtrl'
      })
  });
