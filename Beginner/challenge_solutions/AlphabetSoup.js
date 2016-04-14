function AlphabetSoup(str) {
  var chars = str.split('').sort();
  return chars.join('');
}


console.log(AlphabetSoup('coderbyte'));
