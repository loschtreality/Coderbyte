function SimpleSymbols(str) {
var regex = /(\+[a-zA-Z]\+)/g;
  return regex.test(str);
}

console.log(SimpleSymbols('+d===+a+'));
