// Using the JavaScript language, have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.


function PalindromeTwo(str) {
  var newStr = str.replace(/\W+/g,'').toLowerCase();
  for (var i = 0; i < newStr.length/2; i++) {
    if (newStr.charAt(i) !== newStr.charAt(newStr.length-1-i)) {
      return false;
    }
  }
  return true;
}


console.log(PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna")); //true
console.log(PalindromeTwo("Noel - sees Leon")); //true
console.log(PalindromeTwo("A war at Tarawa!")); //true
console.log(PalindromeTwo("They're taking the hobbits to Isengard!")); //
