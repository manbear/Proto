'use strict';

angular.module('protoApp').controller('CodeCtrl', function ($scope) {
  $scope.code = [
    'case class Person(name: String, age: Int)',
    'def isElligible(guy: Person, legalAge: Int = 18) = {',
    '    val isAdult = guy.age > legalAge',
    '    isAdult || guy.startsWith("Sa")',
    '}',
    'isElligible(Person("Sam", 2))'
  ].join('\n');

  $scope.insight = [
    'Person(name = "foo", age = 3)',
    'isElligible(guy = Person("foo", 3), legalAge = 18) => false',
    'isAdult = false',
    'false',
    '',
    'true'
  ].join('\n');
  
  $scope.options = {
    lineNumbers: true,
    mode: 'text/x-scala',
    theme: 'solarized light'
  };
  $scope.options2 = {
    lineNumbers: true,
    mode: 'text/x-scala',
    theme: 'solarized dark',
    readOnly: 'nocursor'
  };

  $scope.doc = [
    { 
      class: "Array", 
      fun: "flatMap"
    }
  ];

  $scope.exampleData = {
    name: 'accounts',
    local: ['timtrueman', 'JakeHarding', 'vskarich']
  };
  $scope.foo = null;

});