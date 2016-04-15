//Take a string and returns the characters sorted alphabetically

function AlphabetSoup(str) {
  var chars = str.split('').sort();
  return chars.join('');
}
