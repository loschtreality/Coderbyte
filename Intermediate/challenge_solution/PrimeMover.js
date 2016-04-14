// Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number


// function PrimeMover(num) {
//   function primeFinder(counter,digit){
//     if(counter === 1){
//       return digit;
//     }
//     if (Math.floor(Math.sqrt(digit)) % 2 !== 0) {
//       counter--;
//     }
//     return primeFinder(counter,digit+2);
//   }
//   return primeFinder(num,1);
// }


// function PrimeMover(num) {
//   for (var i = 0, checkNum = 1, itera = num; i <= num; i++, checkNum+=2) {
//     if (Math.floor(Math.sqrt(checkNum)) % 2 === 0) {
//       itera--;
//     }
//     if (itera === 0) {
//       return checkNum;
//     }
//   }
// }


function PrimeMover(num) {
var counter = 3;
var isPrime;
  while(num >= 0) {
    isPrime = true;
    for (var i = 1; i < counter; i++) {
      if (Math.floor(Math.sqrt(counter)) % i === 0 && Math.floor(Math.sqrt(counter)) % i > 1) {
        isPrime = false;
      }
    }
        if (isPrime === true) {
          num--;
        }
        counter+=2;
  }
  return counter;
}

//console.log(Math.floor(Math.sqrt(3)),'sqrt');
//console.log(PrimeMover(9)); //23
console.log(PrimeMover(100)); //541


    //target
//nums:1 3 5 7 11 13 17 19 23  return 23;
//coun:9 8 7 6  5  4  3  2  1  0
