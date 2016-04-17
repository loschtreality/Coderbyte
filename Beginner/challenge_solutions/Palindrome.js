//Write a functions which tests whether a string is a palindrome or not.


function Palindrome(str) {
	var noSpace = str.replace(/\s/g,'').split('');
	var normal = noSpace.join('').toLowerCase();
	var reverse = noSpace.reverse().join('').toLowerCase();
	return normal === reverse;
}
