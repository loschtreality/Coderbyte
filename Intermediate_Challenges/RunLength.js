// Using the JavaScript language, have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

function RunLength(str) {
var count = 0;
  for (var i = 0; i < str.length-1; i++) {
    if (str[i] !== str[i+1]) {
      var regx = new RegExp(str[i]+"{"+count+"}");
      str = str.replace(regx,count);
       i-=count-1;
      count = 0;
    }else{
    count++;
    }
  }
  return str;
}



console.log(RunLength("aabbcde")); //"2a2b1c1d1e"
//console.log(RunLength("wwwbbbw")); //"3w3b1w"
