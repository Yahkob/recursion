// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj){
  if(obj instanceof Array){
    var stringifyArray = "[";
    for(var i = 0; i < obj.length - 1; i++){
      stringifyArray += stringifyJSON(obj[i]) + ",";
    }
    stringifyArray += stringifyJSON(obj[obj.length - 1])  + "]";
    return stringifyArray;
  }
  else if(obj instanceof Array !== true && typeof obj === "object"){
    if(!obj){
      return "" + obj;
    }
    var stringifyObject = "{";
    for(var key in obj){
      if(typeof obj[key] === "function"){
        return '{}';
      }
      var count = 0;
      count ++;
      if(count > 0 && stringifyObject !== "{"){
        stringifyObject += ",";
      }
      stringifyObject += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
    }
    return stringifyObject + "}";
  }
  else if(typeof obj === "undefined"){
    return "" ;
  }
  else if(typeof obj === "boolean"){
      return "" + obj;
  }
  else if(typeof obj === "string"){
    return '"' + obj + '"';
  }
  else if(typeof obj === "number"){
    return '' + obj;
  }

};

