// Using the JavaScript language, have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number. For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less than 2 elements.

function Consecutive(arr) {
arr = arr.sort(function(a,b){return a-b;});
var range = [];
var count = 0;
  for (var i = arr[0]; i <= arr[arr.length-1]; i++) {
    range.push(i);
  }
  for (var j = 0; j < arr.length; j++) {
    if (range.indexOf(arr[j]) >= -1){
      count++;
    }
  }
return range.length - count;
}


console.log(Consecutive([4, 8, 6])); //2
console.log(Consecutive([5,10,15])); //8
console.log(Consecutive([-2,10,4])); //10
