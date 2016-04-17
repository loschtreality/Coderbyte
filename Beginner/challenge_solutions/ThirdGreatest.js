// Using the JavaScript language, have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within in. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters.

function ThirdGreatest(strArr) {
  //Result array for words to be pushed into
var result = [];

  //Map new array to get respective word lengths, then sort
var wordLengths = strArr.map(function(words){
    return words.length;
  }).sort(function(a,b){return  b-a;});

  //capture the third largest length in mapped array
var thirdGreatIndex = wordLengths[2];

  //loop through original array to find and push which words match thrid greatest length
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i].length === thirdGreatIndex) {
      result.push(strArr[i]);
    }
  }

  //If multiple words have same length, return the last one
  if (result.length > 1) {
    return result[result.length-1];
  }

  //Else, return the only word at the targeted length;
  return result[0];
}
