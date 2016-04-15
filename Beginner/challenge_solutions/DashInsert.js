// Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. (Parameter is a string)

function DashInsert(str) {
// split, then convert to number
var numbers = str.split('').map(function(input){return Number(input);});
var result = [];
  for (var i = 0; i < numbers.length; i++) {
    //if current index and next index are odd, i is less than array length (avoids extra dash), push
    if (numbers[i] % 2 !== 0 && numbers[i+1] % 2 !== 0 && i !== numbers.length-1) {
      result.push(numbers[i]);
      result.push('-');
    }else{
      result.push(numbers[i]);
    }
  }
  //join result into string
  return result.join('');
}
