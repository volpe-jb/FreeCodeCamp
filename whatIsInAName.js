
function whatIsInAName(collection, source) {

  //console.log(collection);
  
  var arr = collection.filter(function(item) {
    for (var i in source) {
      //console.log(i, source);
      if (source[i] != item[i]) {
        return false;
      }
    }
    return true;
  });
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
