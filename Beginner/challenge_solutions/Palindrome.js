function Palindrome(str) {
	var noSpace = str.replace(/\s/g,'').split('');
	var normal = noSpace.join('');
	var reverse = noSpace.reverse().join('');
	return normal === reverse;
}

   console.log(Palindrome('racecar'));
