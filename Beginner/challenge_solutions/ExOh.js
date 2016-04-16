//Create a function which tests whether there are an equal amount of x's and o's in a string

function ExOh(str) {
var xCount = 0;
var oCount = 0;
var chars = str.split('');
for(var i = 0; i < chars.length; i++){
  if (chars[i].toLowerCase() === 'x') {
    xCount++;
    }
  if (chars[i].toLowerCase() === 'o') {
      oCount++;
    }
  }
  return xCount === oCount;
}
