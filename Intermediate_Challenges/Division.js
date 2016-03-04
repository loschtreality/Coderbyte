// Using the JavaScript language, have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3.


function Division(num1,num2) {
  var common;
  for (var i = 0, j = 0; i <= num1, j <= num2 ; i++, j++) {
    if (num1 % i === 0 && num2 % j === 0) {
      common = i;
    }
  }
  if (common === undefined) {
    return 1;
  }else{
  return common;
  }
}


console.log(Division(7,3)); // 1
console.log(Division(36,54)); //18
console.log(Division(8,8)); //8
