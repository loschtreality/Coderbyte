// Using the JavaScript language, have the function SwapII(str) take the str parameter and swap the case of each character. Then, if a letter is between two numbers (without separation), switch the places of the two numbers. For example: if str is "6Hello4 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3.

function SwapII(str) {
var outsideNums;
var temp;
var lastNum;

if (/\d\w+\d/g.test(str)) {
  outsideNums = str.match(/\d\w+\d/g);
  for (var i = 0; i < outsideNums.length; i++) {

  }
  return outsideNums;
}




var string = str.replace(/[\w]/,function(letter){
  if (letter === letter.toUpperCase()) {
    return letter.toLowerCase();
  }else if (letter === letter.toLowerCase()) {
      return letter.toUpperCase();
  }else {
    return letter;
  }
});



return string;

}

//console.log(SwapII("Hello -5LOL6")); //"hELLO -6lol5"
// console.log(SwapII("2S 6 du5d4e")); //"2s 6 DU4D5E"
 console.log(SwapII("6Hello4 -8World, 7 yes3")); //"4hELLO6 -8wORLD, 7 YES3"
