// Using the JavaScript language, have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.


function MultiplicativePersistence(num) {
var count = 0;
  if (num > 9) { //'fail first' case
    breakdown(num);
  }
  function breakdown(numb){ //recursive function
    count++;
    var stringApart = JSON.stringify(numb).split(''); //convert to string, split into array
    var numbers = stringApart.map(function(string){return JSON.parse(string);}); //change strings to numbs
    var reduced = numbers.reduce(function(prev,curr){return prev * curr;}); //reduce numbs to single num
    if(reduced > 9){ //recursive case
      return breakdown(reduced);
    }
  }
  return count;
}
