// Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.

//try solving with recursion rps style

function arrayAdd(array) {
  //sort the array
var sort = array.sort(function(a,b){return a-b;});
  //find lowest value
var init = sort[0];
  //find highest value
var target = sort.pop();


  //Recursive function
function find(start){
  if(start === target){ //if found, return true
    return true;
  }
  else if(start > target){
    return null;
  }
  else{ //add each of the numbers to create paths
      for (var i = 1; i < sort.length; i++) {
        find(start + sort[i]);
      }
    return false;
  }
}

return find(init); //start with the lowest number

}

console.log(arrayAdd([4, 6, 23, 10, 1, 3]));

//This still needs work
