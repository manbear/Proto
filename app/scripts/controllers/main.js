'use strict';

angular.module('protoApp')
  .controller('CodeCtrl', function ($scope) {
    $scope.code = 'val a = 1 + 1';
    $scope.insight = 'a = 2';
    $scope.options = {
      mode: 'text/x-scala',
      theme: 'ambiance'
    };
  });