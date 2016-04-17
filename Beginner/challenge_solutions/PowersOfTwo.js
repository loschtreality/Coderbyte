//Write a function which checks whether a number is a power of two.

function PowersofTwo(num) {
	if(num % 2 === 0 && num < 4){
		return 'true';
	}
	else if(num % 2 !== 0 && num < 4){
		return 'false';
	}
		return PowersofTwo((num)/2);
}
