// Using the JavaScript language, have the function ThreeFiveMultiples(num) return the sum of all the multiples of 3 and 5 that are below num. For example: if num is 10, the multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9, and adding them up you get 23, so your program should return 23. The integer being passed will be between 1 and 100.


function ThreeFiveMultiples(num) {
var summation = 0;
  function multiples(start){
    if (start > num) {
      return null;
    }
    if (start <= num) {
      summation += start;
    }

      return multiples(start * 5) || multiples(start * 3);
  }
  multiples.call(this,1,3,5);
return summation;
}


//console.log(ThreeFiveMultiples(6)); //8
console.log(ThreeFiveMultiples(10)); //23
//console.log(ThreeFiveMultiples(1)); //0
