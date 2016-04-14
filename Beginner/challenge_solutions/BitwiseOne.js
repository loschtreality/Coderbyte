// Using the JavaScript language, have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your program should return the string "1101"


function BitwiseOne(strArr) {
//Create new number variable for answer
  var newNumber = "";

//Loop through first array element
  for (var i = 0; i < strArr[0].length; i++) {
    //If the index at the element[0] is != element[1]...
    if (strArr[0][i] !== strArr[1][i]) {
      //See if number in element[0], current index is 0. If true, add 1 to new number else push original
      if ( strArr[0][i] === "0") {
        newNumber+="1";
      }else{
        newNumber += strArr[0][i];
      }
    }
    // concat original number in new number answer if first conditional false
    else{
      newNumber += strArr[0][i];
    }
  }

return newNumber;

}


//console.log(BitwiseOne(["100", "000"])); // 100
//console.log(BitwiseOne(["00011", "01010"])); // 01011
