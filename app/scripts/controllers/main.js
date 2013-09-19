'use strict';

angular.module('protoApp')
  .controller('CodeCtrl', function ($scope) {
    $scope.themes = ['solarized dark', 'solarized light', 'ambiance'];
    $scope.theme = $scope.themes[0];
    $scope.code = 'println(hello world)';
    $scope.options = {
	  lineNumbers: true,
      mode: 'text/x-scala',
      theme: $scope.theme,
      onLoad: function(cm){
      	$scope.themeChanged = function(){
		  cm.setOption("theme", $scope.theme.toLowerCase());
      	}
      }
    };
  });

