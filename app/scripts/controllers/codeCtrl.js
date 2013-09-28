'use strict';

app.controller('CodeCtrl', function CodeCtrl($scope, $timeout, $compile, snippets, scaladoc) {
  (function(){ /* Doc */

    $scope.docs = [];
    $scope.snippets = [];

    $scope.search = function(term){
      if("mp" !== term) {
        $scope.docs = [];
        $scope.snippets = [];
        $scope.all = [];
        return;
      }

      $scope.docs = scaladoc.query(term);
      $scope.snippets = snippets.query(term);
      $scope.all = $scope.docs.concat($scope.snippets);
    };

    $scope.hasDocs = function(){
      return $scope.docs.length > 0;
    };

    $scope.hasSnippets = function(){
      return $scope.snippets.length > 0;
    };

    $scope.select = function(item){
      $scope.code += '\n\n' + item.code;
      $scope.insight += '\n\n' + item.insight;
      $scope.term = "";
    };
  })();
  
  (function(){ /* Code & Insight */
    $scope.code = "List(1,2,3).reverse";
    $scope.insightState = 'fetching';

    $timeout(function(){
      $scope.insightState = '';
    }, 1000);

      $scope.code = hereDoc(function() {
/*!case class Person(name: String, age: Int)
def isElligible(guy: Person, legalAge: Int = 18) = {
    val isAdult = guy.age > legalAge
    isAdult || guy.startsWith("Sa")
}
code_with_several_expressions





isElligible(Person("Sam", 2))*/})

  $scope.insightCode = hereDoc(function() {
/*!Person(name = "foo", age = 3)
isElligible(guy = Person("foo", 3), legalAge = 18) => false
isAdult = false
false 

expression_that_has_several_steps
step1
step2
step3
step4

true*/})


    $scope.options = {
      lineNumbers: true,
      mode: 'text/x-scala',
      theme: 'solarized dark',
      smartIndent: false,
      onChange: function(cm,event) {

      },
      onLoad: function(cm) {

      }
    };
    $scope.options2 = {
      lineNumbers: true,
      mode: 'text/x-scala',
      theme: 'solarized light',
      readOnly: 'nocursor',
      gutters: ["CodeMirror-linenumbers", "steps"],
      onLoad: function(cm) {
        var lineNumber = 5;

        var html = '<button class="btn btn-primary btn-xs steps" ng-click="stepsToggle(' + lineNumber + ')">-</button>';

        var template = angular.element(html);
        var linkFn = $compile(template);
        linkFn($scope);

        cm.setGutterMarker(lineNumber, "steps", template[0]);

        $scope.stepsToggle = function() {
          var lineCount = cm.getLineNumber();
          console.log(lineCount);
        }
      }
    };


    $scope.options3 = {
      mode: 'text/x-scala',
      theme: 'solarized light',
      readOnly: 'nocursor'
    };

  })();
});