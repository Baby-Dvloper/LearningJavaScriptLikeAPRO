/*
let js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log('Fernando');
console.log(23);

let firstName = 'Cesar';

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let jonas_matilda = 'JM';
let $function = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Programer';
let muCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year); 

year = 1991;
console.log(typeof year);

console.log(typeof null);



let age = 39;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

var lastName = 'Corona';
console.log(lastName);



//Math Operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log( ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 ,eamd 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Cesar';
const lastName = 'Corona';
console.log(firstName + ' ' + lastName);

// Assignent operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);



function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the parentheses around the left and middle exponentiation
console.log(echo("first",2) ** echo("second",3) / (echo("doom", 2) + echo("third",3) ** echo("four",2))) ;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log('Just a reagular string...');

console.log('String with \n\ multiple \n\ lines');

console.log(`String
multiple
lines`);



const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
} 

const birthYear = 1998;
let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}

console.log(century);


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; //'11'
n = n - 1; 
console.log(n);



// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;

if (money) {
    console.log("Don't spend it all :)");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED'); 
}

const age = '18';
if(age === 18) console.log('You just became an adult :D (strict)');

if(age == 18) console.log('You just became an adult :D (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if(favorite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if(favorite === 7) {
    console.log('7 is also a cool number');
} else if(favorite === 9) {
    console.log('9 is also a cool number');
}
else {
    console.log('Number is not 23 or 7 or 9');
}

if(favorite !== 23) console.log('Why not 23?');


const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);


// if(hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if(hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}



const day = 'thursday';

switch(day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}


if(day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if(day === 'tuesday') {
  console.log('Prepare theory videos');
} else if(day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if(day === friday) {
  console.log('Record videos');
} else if(day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day!');
}
*/

let age = 15;

// age >= 18 ? console.log('I like to drink wine🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine🍷' : 'water 💧';
console.log(drink);


let drink2;
if(age >= 18) {
  drink2 = 'wine🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ?  'wine 🍷' : 'water 💧'}`);