function ABCheck(str) {
  for (var i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() === 'a' && str[i+4].toLowerCase() === 'b'){
      return true;
    }
  }
  return false;
}

console.log(ABCheck('after baldy'));


//How i should have done it:

// function ABCheck(str) {
//
//
//   return str.match(/(a[\s\S][\s\S][\s\S]b)|(b[\s\S][\s\S][\s\S]a)/i)!==null;
//
// }
