//Write a function which capitalizes the first letter of every word

function CapitalizeLetter(str) {
    return str.replace(/(^\w)|(\s\w)/gi,function(letter){ return letter.toUpperCase();});
  }
