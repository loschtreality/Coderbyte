// Using the JavaScript language, have the function DashInsertII(str) insert dashes ('-') between each two odd numbers and insert asterisks ('*') between each two even numbers in str. For example: if str is 4546793 the output should be 454*67-9-3. Don't count zero as an odd or even number.

function DashInsertII(num) {
var result = '';
num = num.split('');
  for (var i = 0, n = num.length; i < n; i++) {
    result += num[i];
    if (num[i] !== '0' && num[i+1] !== '0' && num[i+1] !== undefined && num[i] % 2 === 0 && num[i+1] % 2 === 0) {
      result += '*';
    }
    if (num[i] !== '0' && num[i+1] !== '0' && num[i+1] !== undefined && num[i] % 2 !== 0 && num[i+1] % 2 !== 0) {
      result += '-';
    }
  }


return result;
}


console.log(DashInsertII('999460')); //9-9-94*60
console.log(DashInsertII('56647304')); //56*6*47-304
console.log(DashInsertII('4546793')); //454*67-9-3
