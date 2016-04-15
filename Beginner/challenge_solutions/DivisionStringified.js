// Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346".


function DivisionStringified(num1,num2) {
    var calculation = Math.round(num1/num2);
    calculation = JSON.stringify(calculation);
    if (calculation.length > 3) {
       var split = calculation.split('');
       var container = [];
      for (var i = split.length-1, j=1; i >= 0; i--, j++) {
        container.push(split[i]);
        if (j % 3 === 0) {
          container.push(',');
        }
      }
      if (container[container.length-1] === ',') {
        container.pop();
      }
      return container.reverse().join('');
    }else {
      return calculation;
    }
}

console.log(DivisionStringified(101077282, 21123));
console.log(DivisionStringified(175,24));

console.log(DivisionStringified(123456789,10000)); //12,346
