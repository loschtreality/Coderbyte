// Using the JavaScript language, have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a superincreasing sequence where each element in the array is greater than the sum of all previous elements. The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing sequence. If a superincreasing sequence isn't formed, then your program should return the string "false"



function Superincreasing(arr) {

  for (var i = arr.length-1; i > 0; i--) {
    var summation = 0;
    for (var j = 0; j < i; j++) {
      summation += arr[j];
    }
    if (summation >= arr[i]) {
      return 'false';
    }
    summation = 0;
  }

  return 'true';

}


console.log(Superincreasing([1, 3, 6, 13, 54]));
