// Using the JavaScript language, have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters.

function StringScramble(str1,str2) {
var testParam = new RegExp("["+str1+"]",'gi');
var matches = str2.match(testParam).join('');
  if (matches === str2) {
    return true;
  }
    return false;
}



//console.log(StringScramble('cdore','coder')); //true
//console.log(StringScramble('h3llko','hello')); //false
//console.log(StringScramble('rkqodlw','world')); //true
