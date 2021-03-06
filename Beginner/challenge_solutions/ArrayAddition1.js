// Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.

function ArrayAdditionI(array) {
var sortedArray = array.sort(function(a,b){return a-b;});
var greatestNumber = sortedArray.pop();
var allSummed = sortedArray.reduce(function(prev,curr){return prev + curr;});
var difference;
  if (allSummed < greatestNumber) {
    return false;
  }
  if (allSummed === greatestNumber) {
    return true;
  }

  difference = allSummed - greatestNumber;
  for (var i = 0; i < sortedArray.length; i++) {
    for (var j = 0; j < sortedArray.length; j++) {
      if (array[j] === difference) {
        return true;
      }
      if (sortedArray[i] + sortedArray[j]  === difference && sortedArray[i] !== sortedArray[j]) {
        return true;
      }
    }
  }
  return false;
}
