'use strict';

angular.module('protoApp')
  .controller('CodeCtrl', function ($scope) {
    $scope.code = [
    	'val a = 1 + 1',
    	'case class Cat(age: Int, name: String){',
    	'	def pur = s"${name * age} pur pur pur"',
    	'}'
    ].join('\n');


    $scope.insight = $scope.code;
    $scope.options = {
      lineNumbers: true,
      mode: 'text/x-scala',
      theme: 'solarized dark'
    };
	$scope.options2 = {
      lineNumbers: true,
      mode: 'text/x-scala',
      theme: 'solarized light'
    };

  });