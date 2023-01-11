'use strict'

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descNewZealand = describeCountry('New Zealand', 5.1, 'Wellington');
const descNigeria = describeCountry('Nigeria', 211.4, 'Abuja');
const descVietnam = describeCountry('Vietnam', 98, 'Hanoi');

console.log(descNewZealand, descNigeria, descVietnam);

// #############################  Lecture: Function Declarations vs. Expressions

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}


let percentageWorldBrazil = percentageOfWorld1(214);
let percentageWorldRusia = percentageOfWorld1(143.4);
let percentageWorldFrance = percentageOfWorld1(67.5);
console.log(percentageWorldBrazil, percentageWorldRusia, percentageWorldFrance);


const percentageOfWorld2 = function(population) {
  return (population / 7900) * 100;
}


percentageWorldBrazil = percentageOfWorld2(214);
percentageWorldRusia = percentageOfWorld2(143.4);
percentageWorldFrance = percentageOfWorld2(67.5);
console.log(percentageWorldBrazil, percentageWorldRusia, percentageWorldFrance);

// ############ Lecture: Arrow fucntions

const percentageOfWorld3 = population => (population / 7900) * 100;

const percentageWorldNigeria = percentageOfWorld3(211.4);
const percentageWorldNewZealand = percentageOfWorld3(5.1);
const percentageWorldVietnam = percentageOfWorld3(98);

console.log(percentageWorldNigeria, percentageWorldNewZealand, percentageWorldVietnam);

// ################# Lecture: Fucntions Calling Other funtions

const describePopulation = function(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world.`
}

console.log(describePopulation('Venezuela', 28.7));
console.log(describePopulation('Japon', 125.7));
console.log(describePopulation('Netherlands', 17.5));

// ################## Lecture: Introdcution to Arrays

const populations = [5.1, 211.4, 98, 125.7];
console.log(`The Array population has 4 elements: ${populations.length === 4}`);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

console.log(percentages);