// Using the JavaScript language, have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas and 4 significant digits after the decimal place. For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". The output must contain a number in the one's place even if it is a zero.

function FormattedDivision(num1,num2) {
  var number = (num1/num2).toFixed(4);
  if (number < 1000) {
    return number.toString();
  }
  number = number.split('');
  var dot = number.indexOf('.');

  for (var i = dot, j = 0; i > 0; i--, j++) {
    if (j === 3) {
      number.splice(i,0,',');
      j = 0;
    }
  }

return number.join('');
}


console.log(FormattedDivision(123456789,10000)); //"12,345.6789"
console.log(FormattedDivision(2,3)); //"0.6667"
console.log(FormattedDivision(10,10)); // "1.0000"
console.log(FormattedDivision(9112,2)); // "4,556.0000"
console.log(FormattedDivision(101077282,21123)); // "4,785.1764"
console.log(FormattedDivision(101077282,1)); // "101,077,282.0000"
