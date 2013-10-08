'use strict';

app.controller('CodeCtrl', function CodeCtrl($scope, $timeout, snippets, scaladoc) {
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
isElligible(Person("Sam", 2))
*/})

  $scope.insightCode = hereDoc(function() {
/*!Person(name = "foo", age = 3)
isElligible(guy = Person("foo", 3), legalAge = 18) => false
isAdult = false
false

true
*/})

    $scope.cmLeft = null;
    $scope.cmRight = null;

    $scope.options = {
      lineNumbers: true,
      mode: 'text/x-scala',
      theme: 'solarized dark',
      smartIndent: false,
      onChange: function(cm,event) {
        
      },
      onScroll: function(cm) {
        if ($scope.cmLeft === null) {
          $scope.cmLeft = cm;
        }

        var scrollLeftInfo = cm.getScrollInfo();
        if ($scope.cmRight !== null) {
          $scope.cmRight.scrollTo(scrollLeftInfo['left'], scrollLeftInfo['top']);
        }
      },
      onLoad: function(cm) {
        $scope.cmLeft = cm;
      }
    };
    $scope.options2 = {
      lineNumbers: true,
      mode: 'text/x-scala',
      theme: 'solarized light',
      readOnly: 'nocursor',
      onScroll: function(cm) {
        if($scope.cmRight === null) {
          $scope.cmRight = cm;
        }

        var scrollRightInfo = cm.getScrollInfo();
        if ($scope.cmLeft !== null) {
          $scope.cmLeft.scrollTo(scrollRightInfo['left'], scrollRightInfo['top']);
        }
      },
      onLoad: function(cm) {
        $scope.cmRight = cm;
      }       
    };

    $scope.options3 = {
      mode: 'text/x-scala',
      theme: 'solarized light',
      readOnly: 'nocursor'
    };

  })();
  
  (function() { /* Insight toggling */
    $scope.insightToggler = function() {
      var wrapCmRight = $scope.cmRight.getWrapperElement();
      var codeEditor = document.getElementById('codeEditor');
        
      if (wrapCmRight.style.visibility == "") {
        wrapCmRight.style.visibility = 'hidden'; 
        codeEditor.setAttribute('class', 'expanded');

      } else {
        var isCurrentlyVisible = wrapCmRight.style.visibility == 'visible';
        wrapCmRight.style.visibility = isCurrentlyVisible ? 'hidden' : 'visible';
        codeEditor.setAttribute('class', isCurrentlyVisible ? '' : 'expanded');
      }
    }
  })();

});