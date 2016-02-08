function PowersofTwo(num) {
	if(num % 2 === 0 && num < 4){
		return 'true';
	}
	else if(num % 2 !== 0 && num < 4){
		return 'false';
	}
		return PowersofTwo((num)/2);
}

console.log(PowersofTwo(124));
console.log(PowersofTwo(128));
