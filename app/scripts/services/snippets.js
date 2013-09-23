app.factory('snippets', function() {
	function hereDoc(f) {
		return f.toString().
		  replace(/^[^\/]+\/\*!?/, '').
		  replace(/\*\/[^\/]+$/, '');
	}

  return {
    query: function(term){
      return [
        { code: hereDoc(function() {
/*!val pics = List("banana.jpg", "orange.jpg", "strawberry.jpg")
pics.map(fruit => new java.io.File(fruit).length)
			*/})
        },
        { code: hereDoc(function() {
/*!List(1,2,3).map(_+1).
	reverse.
	take(2)*/
		  })
        }
      ];
    }
  };
});