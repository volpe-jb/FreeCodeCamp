
var pattern = "";  // this is the string being built
var size = 8;  // number of rows and characters

for (var i = 0; i < size; i++) { // outer loop controls each line, ends with "\n"

  for (var j = 0; j < size; j++) { // builds the pattern of each line
   var total = i + j;
   if (total % 2 === 0) {  // check for 0 
     pattern += " ";  // add a 'space' to the pattern
   } else {
     pattern += "#";  // add # to the pattern
   }  // end else
  }  // end if
  pattern += "\n";
}  // end for

console.log(pattern);
  
