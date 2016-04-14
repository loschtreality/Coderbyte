// Using the JavaScript language, have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".

function CaesarCipher(str,num) {
var chars = [];
var res = "";
  if (num === 0) {
    return str;
  }
  for (var i = 0; i < str.length; i++) {
    chars.push(str.charCodeAt(i));
    if (chars[i] + num < 90 && chars[i] + num > 65 || chars[i] + num < 122 && chars[i] + num > 97) {
      res += String.fromCharCode(chars[i] + num);
    }
    else if(chars[i] + num > 90 && chars[i] + num < 97 || chars[i] + num > 122){
      res += String.fromCharCode(chars[i] + num - 26);
    }
    else{
      res += String.fromCharCode(chars[i]);
    }
  }
  return res;
}


//101-132 cap A-Z   / 141-172 lc a-c

console.log(CaesarCipher('Hello',4)); //Lipps
console.log(CaesarCipher('FizzBuzz',-3)); //CfwwBrww
console.log(CaesarCipher('abc',0)); //abc
console.log(CaesarCipher('Caesar Cipher',2)); //Ecguct Ekrjgt


//PREVIOUS ATTEMPT (ALL TEST CASES CORRECT)

// function CaesarCipher(str,num) {
// var chars = [];
//   if (num === 0) {
//     return str;
//   }
//   for (var i = 0; i < str.length; i++) {
//     chars.push(str.charCodeAt(i));
//   }
//   return chars.map(function(chars[i]){
//       if (chars[i] + num < 90 && chars[i] + num > 65 || chars[i] + num < 122 && chars[i] + num > 97) {
//       return String.fromCharCode(chars[i] + num);
//       }
//       else if(chars[i] + num > 90 && chars[i] + num < 97 || chars[i] + num > 122){
//         return String.fromCharCode(chars[i] + num - 26);
//       }else{
//         return String.fromCharCode(chars[i]);
//       }
//     }).join('');
// }


//I wanted to reduce the time complexity on this, so I placed everything in one for loop as seen above this commented section
