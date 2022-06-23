//######### Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index) , which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even iplement both
    versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
    whether Mark has a higher BMI than John.


Test Data:
* Data 1: Mark weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
* Data 2: Mark weights 95 kg and is 1.88m tall. John weights 85kg and is 1.76m tall.
*/

// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / (johnHeight * johnHeight);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI);
// console.log(markHigherBMI);

// console.log(markWeight / markHeight ** 2 > johnWeight / (johnHeight * johnHeight));

/* ####### Coding Challenge #2
    Use the BMI example from Challenge #1, and the code you already wrote, and
    improve it.

    Your Tasks:
    1. Print a nice output to the console, saying who has the higher BMI. The message
    is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI(28.3) is higher than John's (23.9)!"
    
    Hint: Use an if/else statement

*/
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is than John's(${johnBMI})!`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
}
