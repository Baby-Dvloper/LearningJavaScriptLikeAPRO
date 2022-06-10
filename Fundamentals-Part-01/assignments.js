/* 
    Instructions:

    * There is one assignment for each lecture in the JavaScript Fundamentals
    Sections Part 1 and 2 (not all electures, but most);
    * The goal of these assignments is that you can immediately apply the concepts
    you learn in each video;
    * So after you complete each lecture, find the assignment for the video you just 
    watched, and write the code according to the instrucions
    * Take all the time that you need, no need to hurry!
    * In order to actually write the code, create a new script called assignments.js
    in the current project folder and link it to the HTML file.
*/


/* JavaScirpt Fundamentals - Part 1 */
/* ########### LECTURE: Values and Variables

    1. Declare variables called 'country', 'continent and 'population' and
    assign their values according to your own country (population in millions)
    2. Log their values to the console
 */

const country = 'Mexico';
const continent = 'America';
let population = 129;

console.log(country);
console.log(continent);
console.log(population);


/* 
########### Lecture: Data Types
    1. Declare a varaible called 'isIsland' and set its values according to your
    country. The variable should hold a Boolean value. Also declare a variable
    'language', but don't addign it any value yet.
    2. Log the types of 'isIsland', 'population', 'country' and 'language' ti the
    console.
*/
 const isIsland = false;
 let language;

 console.log(typeof isIsland);
 console.log(typeof population);
 console.log(typeof country);
 console.log(typeof language);

 /*
########### Lecture: let, const and var
    1. Set the value of 'language' to the language spoken where you live (some
        countries have mmultiple laguages, but just choose one)
    2. Think about which variables should be const variables (which values will never
        change, and which might change?). Then, change these variables to const.
    3. Try to change one of the changed variables now, and observe what happens
 */

language = 'spanish';
// isIsland = true;

/* ####### Lecture: Basic Operators
    1. If your country split in half, and each half would contain half the population,
    then how many people would live in each half?
    2. Increse the population of your country by 1 and log the result to the console
    3. Finland has a population of 6 million people. Does your country have more people than Finland?
    4. The average population of a country is 33 million people. Does your country have less people than the average country?
    5. Based on the variables you created, create a new variable 'description'
    which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
*/

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description  = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;
console.log(description);