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

const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);

console.log(markWeight / markHeight ** 2 > johnWeight / (johnHeight * johnHeight))