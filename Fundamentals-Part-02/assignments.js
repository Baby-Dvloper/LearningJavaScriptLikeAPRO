// ########### Lecture: Functions
/*
	1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
	2. Call this funtion 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console 
*/

function describeCountry(country, population, capitalCity) {
	return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const mexico = describeCountry('Mexico' , 129, 'Mexico City');
const newZealand = describeCountry('New Zealand' , 5, 'Wellington');
const uzbekistan = describeCountry('Uzbekistan' , 34, 'Tashkent');

console.log(mexico);
console.log(newZealand);
console.log(uzbekistan);

// ############# Lecture: Function Declarations vs. Expresions
/*
	1. The world population is 7900 million people. Create a funtion declaration called 'percentagesOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
	2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
	3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console.
	4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country propulations (can be the same populations)
*/

function percentageOfWorld1(population) {
	return population / 7900 * 100;
}

const mexicopopulation1 = percentageOfWorld1(129);
const newZealandpopulation1 = percentageOfWorld1(5);
const uzbekistanpopulation1 = percentageOfWorld1(34);


console.log(mexicopopulation1, newZealandpopulation1, uzbekistanpopulation1);

const percentageOfWorld2 = function (population) {
	return population / 7900 * 100;
}

const mexicopopulation2 = percentageOfWorld2(129);
const newZealandpopulation2 = percentageOfWorld2(5);
const uzbekistanpopulation2 = percentageOfWorld2(34);

console.log(mexicopopulation2, newZealandpopulation2, uzbekistanpopulation2);