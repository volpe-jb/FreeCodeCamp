/*
You will be provided with an initial array (the first argument in the destroyer 
function), followed by one or more arguments. Remove all elements from the initial 
array that are of the same value as these arguments.
*/

function destroyer(arr) {
  // Remove all the values
  
  var args = Array.from(arguments);  // converts all input into array
  args.shift();  // delete first element in args[] b/c it is original array
  console.log(args, arr);
    
  return arr.filter(function(value) {
    return !args.includes(value);
  });

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
