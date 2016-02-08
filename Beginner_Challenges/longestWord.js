// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.


function LongestWord(sen){
var result = [];
var compare;
var words = sen.replace(/[^\w\s]/g,'')split(' ');
var lengths = words.map(function(index){
  return index.length;
});
  compare = Math.max.apply(null,lengths);
  for (var i = 0; i < words.length; i++) {
    if(words[i].length === compare){
        result.push(words[i]);
      }
    }
    return result[0];
  }
