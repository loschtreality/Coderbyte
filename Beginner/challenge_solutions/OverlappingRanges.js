// Using the JavaScript language, have the function OverlappingRanges(arr) take the array of numbers stored in arr which will contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. If both ranges do not overlap by at least x numbers, then your program should return the string false.

function OverlappingRanges(arr) {
//Define two range sets
var setOne = [];
var setTwo = [];
var count = 0;

//Push ranges into respective arrays
  for (var h = arr[0]; h <= arr[1]; h++) {
    setOne.push(arr[h]);
  }
  for (var i = arr[2]; i <= arr[3]; i++) {
    setTwo.push(arr[i]);
  }

//Loop over each element in setOne to see if there is a match in setTwo
for (var j = 0; j < setOne.length; j++) {
  for (var k = 0; k < setTwo.length; k++) {
    if (setOne[j] === setTwo[k]) {
      count++;
    }
  }
}

//Compare count to last index condition
  if (count >= arr[4]) {
    return "true";
  }else {
    return "false";
  }

}
