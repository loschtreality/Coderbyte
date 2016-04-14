// Using the JavaScript language, have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty.

function SimpleMode(arr) {
var dictionary = {};
var highestVal = 1;
var mode = -1;
  for (var i = arr.length-1; i >= 0; i--) {
    if (dictionary[arr[i]]) {
      dictionary[arr[i]]++;
    }
    if (dictionary[arr[i]] >= highestVal) {
      highestVal = dictionary[arr[i]];
      mode = arr[i];
    }
    if(!dictionary[arr[i]]){
      dictionary[arr[i]] = 1;
    }
  }
  return mode;
}

console.log(SimpleMode([10, 4, 5, 2, 4])); //4
console.log(SimpleMode([3,4,1,6,10])); //-1
console.log(SimpleMode([2,2,2,5,5,5,6])); //2
console.log(SimpleMode([5,5,2,2,1])); //return 5 because it appears first
console.log(SimpleMode([5, 10, 10, 6, 5])); //return 5 because it appears first
