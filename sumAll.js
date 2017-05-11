/*
We'll pass you an array of two numbers. Return the sum of those two numbers 
and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {

var minNumber = Math.min(arr[0], arr[1]);
  console.log("minNumber: " + minNumber);

var maxNumber = Math.max(arr[0], arr[1]);
  console.log("maxNumber: " + maxNumber);

var steps = maxNumber - minNumber;
console.log(steps);

var sum = 0;
for (var i = minNumber; i <= maxNumber; i++) {
  sum += i; 
  console.log("i: " + i);
} 
console.log(sum);
return sum;
  
}  

sumAll([1, 4]);
