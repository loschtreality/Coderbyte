// Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.
//


function LetterCountI(str) {
var words = str.toLowerCase().split(" ");
var dictionary = {};
var greatest;
var result = [];
console.log(words, 'words');
  for (var i = 0; i < words.length; i++) {
      for (var j = 0; j < words[i].length; j++) {
        if (dictionary[words[i][j]]) {
          dictionary[words[i][j]] += 1;
        }
        else{
          dictionary[words[i][j]] = 0;
        }
      }
  }
return dictionary;
}


console.log(LetterCountI('Hello')); //hello
//LetterCountI('Hello Apple Pie');
