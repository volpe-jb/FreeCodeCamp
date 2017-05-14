/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/

var result = [];

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  result = arr.slice(howMany);
  return result;
}

slasher([1, 2, 3], 2);
