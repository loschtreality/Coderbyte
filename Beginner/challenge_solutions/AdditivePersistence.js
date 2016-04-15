// Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.


function AdditivePersistence(num) {
var count = 0;
  if (num > 9) { //'fail first' case
    breakdown(num);
  }
  function breakdown(numb){ //recursive function
    count++;
    var stringApart = JSON.stringify(numb).split(''); //convert to string, split into array
    var numbers = stringApart.map(function(string){return JSON.parse(string);}); //change strings to numbs
    var reduced = numbers.reduce(function(prev,curr){return prev + curr;}); //reduce numbs to single num
    if(reduced > 9){ //recursive case
      return breakdown(reduced);
    }
  }
  return count;
}
