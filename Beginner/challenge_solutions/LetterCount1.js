// Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.
//


function LetterCountI(str) {
var words = str.toLowerCase().split(" ");
var result = [];
var highestFreq;
var position;
  for (var i = 0; i < words.length; i++) {
    var greatest = 1;
    var dictionary = {};
      for (var j = 0; j < words[i].length; j++) {
        if (dictionary[words[i][j]]) {
          dictionary[words[i][j]]++;
          greatest = dictionary[words[i][j]];
        }
        else{
          dictionary[words[i][j]] = 1;
        }
      }
      result.push(greatest);
      greatest = 1;
  }
  highestFreq = Math.max.apply(null,result);

  if (highestFreq === 1) {
    return -1;
  }
  position = result.indexOf(highestFreq);
  return words[position];
}
