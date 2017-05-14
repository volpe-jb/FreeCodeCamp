/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In 
a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, 
punctuation), but do pass them on.

WARNING: This code is ugly: repetitive and inelegant. I will return and refactor this code.
*/
function rot13(str) { // LBH QVQ VG!

var arr = [];
  for (var i = 0; i < str.length; i++) {
    var value = str.charCodeAt(i);

    var newValue = 0;
    var newLetterA, newLetterB, newLetterC = "";
  
    //console.log(str.charCodeAt(i), newValue);
    if (value > 77) {
      newValue = value-13;
      newLetterA = String.fromCharCode(newValue);
      //console.log("newLetterA " + newLetterA); 
      arr.push(newLetterA);
      console.log(arr);
    } else if (value < 78 && value > 64) {
      newValue = value+13;
      newLetterB = String.fromCharCode(newValue);
      //console.log("newLetterB " + newLetterB);  
      arr.push(newLetterB);
      console.log(arr);
    } else {
      // for other punctuation keep it
      newValue = value;
      newLetterC = String.fromCharCode(newValue);
      arr.push(newLetterC);
      console.log(arr);
    }
   // return arrl here will return F, it leaves the if loop
    
  } // end if
  return arr.toString().replace(/,/g, '');

} // end function rot13

// Change the inputs below to test
rot13("SERR PBQR PNZC!");


