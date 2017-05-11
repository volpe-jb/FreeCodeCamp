/*
Compare two arrays and return a new array with any items only found in one 
of the two given arrays, but not both. In other words, return the symmetric 
difference of the two arrays.
*/

function diffArray(array1, array2) {
   var uniqueElements = []; 

  //concatenate the two arrays and sort the items in growing order
   var combinedSet = array1.concat(array2).sort(); 
   console.log(combinedSet);

  //loop through the ordered array and push unique elements - only elements that are not equal to the previous element nor the next one
   for(var i = 0; i < combinedSet.length; i++) {
       console.log("element " + i + " and " + "element " + i + "+1");
       console.log("element " + i + " and " + "element " + i+ "-1");
       if(combinedSet[i] !== combinedSet[i+1] && combinedSet[i] !== combinedSet[i-1]){
         
       uniqueElements.push(combinedSet[i]);
       }
   }

   return uniqueElements;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
