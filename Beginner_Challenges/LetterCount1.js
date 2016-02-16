// Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.
//


function LetterCountI(str) {
var words = str.toLowerCase().split(" ");
var dictionary = {};
console.log(words, 'words');
    for (var i = 0; i < words.length; i++) {
      var count = 0;
      for (var j = 0; j < words[i].length; j++) {
        if (words[i].indexOf(words[i].charAt(j)) >= 2) {
          count++;
          dictionary[words[i]] = count;
        }
      }
      count = 0;
    }
    return dictionary;
}


console.log(LetterCountI('Hello Apple Pie'));
//LetterCountI('Hello Apple Pie');
