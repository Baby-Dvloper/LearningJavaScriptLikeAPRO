'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I   can drive :D');


function logger() { //function body
	console.log('My name is Fernando');
}


//calling / running // invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges}`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration

const age1 = calcAge1(1991);

function calcAge1 (birthYear) {
	return 2037 - birthYear;
}


// Function expression

const calAge2 = function (birthYear) {
	return 2037 - birthYear;
}
const age2 = calAge2(1991);

console.log(age1, age2);
*/

/*
//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2037 - birthYear;
	const retirement = 65 - age;
	return `${firstName} retire in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
//############# Lecture: Function calling other functions
function cutFruitPieces(fruit) {
	return fruit * 4; // return the number of pieces
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
	return juice;
}

console.log(fruitProcessor(2, 3));

*/