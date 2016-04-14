// Using the JavaScript language, have the function ChangingSequence(arr) take the array of numbers stored in arr and return the index at which the numbers stop increasing and begin decreasing or stop decreasing and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point in the array where the numbers were increasing and the next number begins a decreasing sequence. The array will contain at least 3 numbers and it may contains only a single sequence, increasing or decreasing. If there is only a single sequence in the array, then your program should return -1. Indexing should begin with 0.

function ChangingSequence(arr) {
//Define starting sequence condition, either increasing or decreasing
  if (arr[0] < arr[1]) { //Increase
    for (var i = 0; i < arr.length-1; i++) {
  //Set condition for increase sequence
    if (arr[i+1] < arr[i]) {
      return i;
      }
    }
  }
  else if (arr[0] > arr[1]) { //Decrease
    for (var j = 0; j < arr.length-1; j++) {
//Set condition for decrease sequence
    if (arr[j+1] > arr[j]) {
      return j;
      }
    }
  }
//Return if loop conditions are false
return -1;
}

console.log(ChangingSequence([1, 2, 4, 6, 4, 3, 1])); //returns 3
console.log(ChangingSequence([-4, -2, 9, 10])); //returns -1
console.log(ChangingSequence([5, 4, 3, 2, 10, 11])); //returns 3
