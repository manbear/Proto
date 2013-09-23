app.factory('scaladoc', function() {
  return {
    query: function(term){
      return [
        { class: "List", fun: "map", signature: "[B](f: (a) => b): List[B]", example: "List(1,2,3).map(_ + 1) == List(2,3,4)"},
        { class: "Array", fun: "map", signature: "[B](f: (a) => b): Array[B]", example: "Array(1,2,3).map(_ + 1) == Array(2,3,4)" },
        { class: "Seq", fun: "map", signature: "[B](f: (a) => b): Seq[B]", example: "Seq(1,2,3).map(_ + 1) == Seq(2,3,4)" }
      ];
    }
  };
});

// $scope.search = "";
//   var fdoc = new Fuse([
//     { 
//       class: "Array",
//       fun: "flatMap"
//     },
//     {
//       class: "Array",
//       fun: "map"
//     }
//   ], {keys: ['class','fun']});

//   var fsnippet = new Fuse([
//     { 
//       title: "Map over array",
//       code: "bla bla"
//     },
//     {
//       title: "Map over array 2",
//       code: "bla bli"
//     }
//   ], {keys: ['title','code']});