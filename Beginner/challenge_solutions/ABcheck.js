// Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.


function ABCheck(str) {
  str = str.toLowerCase();
if (str.indexOf('a') === -1 || str.indexOf('b') == -1) {
  return false;
}
  return Math.abs(str.indexOf('a') - str.indexOf('b'))-1 === 3 || Math.abs(str.lastIndexOf('a') - str.lastIndexOf('b'))-1 === 3;
}


console.log(ABCheck('after baldy'));
console.log(ABCheck("lane borrowed"));
console.log(ABCheck("Laura sobs"));
console.log(ABCheck("aaaaddddd"));
