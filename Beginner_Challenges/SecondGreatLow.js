// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!


//ORIGINAL ATTEMPT: ---------------------------------------------


// function SecondGreatLow(arr) {
//   //Declare return answer string, low and high variables to join later
// var answer = [];
// var midway;
// var secondLow = [];
// var secondHigh = [];
//
//   //sort the array of numbers
//   arr.sort(function(a,b){return a - b;});
//
//   //In the case of two numbers, return both numbers
//   if (arr.length === 2) {
//   answer.push(arr[1]," ",arr[0]);
//   return answer.join('');
//   }
//
//   //Find halfway index of array, then ceil for case of odd half length
//     midway = Math.ceil(arr.length/2);
//
//   //From halfway, split arr into two sections
//     for (var i = 0; i < midway; i++) {
//       secondLow.push(arr[i]);
//       secondHigh.push(arr[arr.length-1-i]);
//     }
//   //Push the second greatest low and the second least high with space between
//       answer.push(secondLow[secondLow.length-1],' ',secondHigh[secondHigh.length-1]);
//
//     //Push numbers into answer array, then join
//     return answer.join('');
//
// }


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

console.log(SecondGreatLow([1, 2, 78, 90, 100])); //2 90
console.log(SecondGreatLow([1, 3, 5, 100, 200, 400])); //3 200
console.log(SecondGreatLow([7, 7, 90, 1000003])); //90 90
console.log(SecondGreatLow([7, 7, 12, 98, 106])); //12 98
