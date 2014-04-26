// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];
  var retrieveElements = function(node){
    var children = node.childNodes;
    for(var i = 0; i < children.length; i++){
      if(children[i].nodeType === 1){
        if(children[i].classList.contains(className)){
        results.push(children[i]);
        }
      retrieveElements(children[i]);
      }
    }

  };
  retrieveElements(document);
  return results
};