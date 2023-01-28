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

// ################## Lecture: Basic Array Operations (Methods)

const neighboursNetherlands = ['Belgium', 'Germany', 'United Kingdom', 'France'];
neighboursNetherlands.push('Utopia');

neighboursNetherlands.pop();

if (!neighboursNetherlands.includes('Germany')) {
  console.log('Probably not a central European country 😀');
}

console.log(neighboursNetherlands);
neighboursNetherlands[neighboursNetherlands.indexOf('France')] = 'Cheese Country';

console.log(neighboursNetherlands);

// ################## Lecture: Introduction to Objects

const myCountry = {
  country: 'China',
  capital: 'Beijing',
  language: 'Mandarin',
  population: 1412,
  neighbours: ['Afghanistan', 'Bhutan', 'India', 'Kazakhstan', 'North Korea', 'Kyrgyztan', 'Laos', 'Mongolia', 'Nepal', 'Pakistan', 'Russia', 'Vietnam'],

  describe: function(){
    console.log(`${this.country} has ${this.population} million finish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
  },
  checkIsland: function(){
    this.isIsland = this.neighbours.length === 0 ? true : false;
  }
};

// ################# Lecture: Dot vs. Bracket notation

console.log(`${myCountry.country} has ${myCountry.population} million finish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// myCountry.population = myCountry.population + 2;
myCountry.population += 2;
console.log(myCountry.population);
// myCountry['population'] = myCountry['population'] - 2;
myCountry['population'] -= 2;
console.log(myCountry['population']);



// ################## Lecture: Object Methods

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);