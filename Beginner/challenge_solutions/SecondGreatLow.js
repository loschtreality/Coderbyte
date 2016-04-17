// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!

//REFACTORED ATTEMPT ---------------------------------------------


function SecondGreatLow(arr) {
  //Define result array and array to eliminate duplicate values
var result = [];
var noRepeat = [];
  //Sort the array
  arr.sort(function(a,b){return a-b;});

  //Loop through array and eliminate duplicates
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i+1]) {
      noRepeat.push(arr[i]);
    }
  }
  //Push the sorted and filtered at second greatest/lowest numbers to result
  result.push(noRepeat[1],' ',noRepeat[noRepeat.length-2]);

  //Join for answer format
return result.join('');
}
