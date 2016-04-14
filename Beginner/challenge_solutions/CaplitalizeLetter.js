function LetterCapitalize(str) {
    return str.replace(/(^\w)|(\s\w)/gi,function(letter){ return letter.toUpperCase();});
  }


console.log(LetterCapitalize('hello world'));
