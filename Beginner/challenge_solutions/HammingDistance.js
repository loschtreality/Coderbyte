// Using the JavaScript language, have the function HammingDistance(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length and return the Hamming distance between them. The Hamming distance is the number of positions where the corresponding characters are different. For example: if strArr is ["coder", "codec"] then your program should return 1. The string will always be of equal length and will only contain lowercase characters from the alphabet and numbers.


function HammingDistance(strArr) {
//Declare a distance count
var count = 0;
//Break apart elements and split strings
var array1 = strArr[0].split('');
var array2 = strArr[1].split('');
//Loop through characters in array[0] compared to array[1]
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) { //if letters are not a match, increase count
      count++;
    }
  }
//return the count (hamming distance)
return count;
}
