// Using the JavaScript language, have the function ArithGeoII(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.

function ArithGeoII(arr) {
  var sum = arr[arr.length-1];
  var geom = true;
  var difference = arr[arr.length-1] - arr[arr.length-2];
  for (var i = arr.length-1; i > 0; i--) {
    if (arr[i] % arr[i-1] !== 0) {
      geom = false;
    }
    sum -= difference;
  }
  if(sum === arr[0]){
    return 'Arithmetic';
  }
  else if(geom === true) {
    return 'Geometric';
  }
  return -1;
}

console.log(ArithGeoII([5,10,15])); //Arithmetic
console.log(ArithGeoII([2, 4, 6, 8])); //Arithmetic
console.log(ArithGeoII([2, 6, 18, 54])); //Geometric
console.log(ArithGeoII([2,4,16,24])); //-1


console.log(ArithGeoII([10,110,210,310,410])); //Arithmetic
console.log(ArithGeoII([-3,-4,-5,-6,-7])); //Arithmetic
console.log(ArithGeoII([1,5,9])); //Arithmetic
