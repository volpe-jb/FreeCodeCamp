for (var i = 1; i < 101; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)){
    console.log("FizzBuzz " + i);
  } else if (i % 3 == 0) {
    console.log("Fizz " + i);
  } else if (i % 5 == 0) {
    console.log("Buzz " + i);
  }
}  // end for
