/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
  var array = str.split("");  // split string at the spaces
  //console.log(array);
  array.reverse();
  console.log(array);
  var str2 = array.join("");
  return str2;
}

reverseString("hello");
