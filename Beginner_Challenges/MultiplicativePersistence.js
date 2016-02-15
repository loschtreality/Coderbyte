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

console.log(MultiplicativePersistence(25), '25 case'); // returns 2
console.log(MultiplicativePersistence(4), '4 case'); // returns 0
