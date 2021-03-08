function sum(x, y) {
	return x + y;
}

function intRandom(min, max){
	return Math.floor(Math.random() * (max - min) + 1) + min
}

function floatRandom(min, max){
	return (Math.random() * max) + min;
}

function boolRandom(percent){
	let bool = floatRandom(0, 100) < percent ? true : false;
	return bool;
}

export {sum, intRandom, floatRandom, boolRandom }