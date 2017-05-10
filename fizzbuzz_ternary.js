var fizz = "Fizz";
var buzz = "Buzz";
var counter = " ";
for (var i = 1; i < 21; i++) {
  counter = !(i % 3) ? !(i % 5) ? fizz + buzz : fizz : !(i % 5) ? buzz : i;
  console.log(counter);
}

/*
  (i % 3). is checking the remainder. if there is a remainder, this expression evaluates as true. if no remainder (the number is divisible by 3), but the 0 is evaluated as false.
  !(i % 3) . here I'm saying NOT when there's a remainder, or Not when expression evaluates to 0. In positive lingo, I'm saying When there's no remainder, choose fizz.
  
  Remember ternary evaluates Right to Left.
    so the second !(i % 5) is evaluated first, and if True, put counter = buzz
                                                   if False, counter = i
    then evaluate !(i % 3). if True, counter = fizz, if False, keep the counter = i (from the evaluation from above)
    and last,
    evaluate !(i % 3) ? !(i % 5). If both true, counter = fizz + buzz, if false, keep counter = i
*/
