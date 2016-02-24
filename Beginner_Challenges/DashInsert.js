// Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

function DashInsert(str) {
var numbers;
var answer;
//Stringify numbers if str is not a string
  if (typeof str !== 'string') {
  numbers = JSON.stringify(str);
}

//Split string into array
    numbers = numbers.split('');
//Map the array and parse each number
    numbers = numbers.map(function(index){return JSON.parse(index);});


  for (var i = 0; i < numbers.length-1; i++) {
    if (numbers[i] % 2 !== 0 && numbers[i+1] % 2 !== 0) {
      answer = numbers.splice(i+1,0,'-');
    }
  }
return answer;
}

console.log(DashInsert(454793));
// return str.replace(/([13579])/g,function(letter){
//   return letter + "-";
// });
