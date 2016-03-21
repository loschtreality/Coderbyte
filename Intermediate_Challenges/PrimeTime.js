//Using the JavaScript language, have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.


function PrimeTime(num) {
  if (num === 0) {
    return false;
  }
  if (num === 1) {
    return true;
  }
for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
}
  return true;
}

console.log(PrimeTime(8)); //false
console.log(PrimeTime(110)); //false
console.log(PrimeTime(7)); //true
console.log(PrimeTime(199)); //true
