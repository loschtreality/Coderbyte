// Using the JavaScript language, have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.

function BracketMatcher(str) {
var bracketCount = 0;
  for (var i = 0; i < str.length; i++) {
    if(str[i] === '(' || str[i] === ')'){
      bracketCount++;
    }
  }
  if (bracketCount === 0 || bracketCount % 2 === 0) {
    return 1;
  }
  return 0;
}

// console.log(BracketMatcher("(coder)(byte))")); //0
// console.log(BracketMatcher("(c(oder)) b(yte)")); //1
// console.log(BracketMatcher("(hello (world))")); //1
// console.log(BracketMatcher("((hello (world))")); //0
console.log(BracketMatcher("the color re(d))()(()")); //1
