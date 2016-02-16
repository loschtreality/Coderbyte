// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!
//
// Use the Parameter Testing feature in the box below to test your code with different arguments.

function SecondGreatLow(arr) {
var answer = '';
arr.sort(function(a,b){return a - b;});
  if (arr.length === 2) {
    return answer += arr[0] +" "+arr[1];
  }else{
arr.map(function())

var secondLow = arr[1];
var secondHigh = arr[arr.length-2];

  return answer+= secondLow +' '+ secondHigh;
  }
}
