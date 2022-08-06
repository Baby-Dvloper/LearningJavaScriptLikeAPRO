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

/////////////////////////////////////////////////////////////

/* ####### Coding Challenge #2
    Use the BMI example from Challenge #1, and the code you already wrote, and
    improve it.

    Your Tasks:
    1. Print a nice output to the console, saying who has the higher BMI. The message
    is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI(28.3) is higher than John's (23.9)!"
    
    Hint: Use an if/else statement

*/
// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / (johnHeight * johnHeight);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI(${markBMI}) is than John's(${johnBMI})!`);
// } else {
//     console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
// }

//////////////////////////////////////////////////////////////

//Coding Challnge #3

/*

There are two gymnastics teams, Dolphins and Koalas. They compete againt each other 3 times. The winner with hte highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test fot that as well (draw means they have the same average score).
3. Bonus 1: Inclue a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: use a logical operator to test for minimum score, as well as multiple else-if blocks
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater o equal 100 points. Otherwise, no team wins the trophy.


TEST DATA:
* Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
* Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
* Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/

// const dolphinsScore_1 = 96;
// const dolphinsScore_2 = 108;
// const dolphinsScore_3 = 89;

// const koalasScore_1= 88;
// const koalasScore_2= 91;
// const koalasScore_3= 110;

// const averageScoreDolphins = (dolphinsScore_1 + dolphinsScore_2 +dolphinsScore_3) / 3;
// const averageScoreKoalas = (koalasScore_1 + koalasScore_2 + koalasScore_3) / 3;

// console.log(`Koalas :${averageScoreKoalas}`, `Dolphins :${averageScoreDolphins}`);

// if(averageScoreDolphins > averageScoreKoalas){
//   console.log('Dolphins wins the competition');
// } else if(averageScoreKoalas > averageScoreDolphins) {
//   console.log('Koalas wins the competition');
// } else {
//   console.log('There is a draw');
// }
// ##############################
 

// ##############################
// const dolphinsScore_1 = 97;
// const dolphinsScore_2 = 112;
// const dolphinsScore_3 = 101;

// const koalasScore_1= 109;
// const koalasScore_2= 95;
// const koalasScore_3= 106;

// const averageScoreDolphins = (dolphinsScore_1 + dolphinsScore_2 +dolphinsScore_3) / 3;
// const averageScoreKoalas = (koalasScore_1 + koalasScore_2 + koalasScore_3) / 3;

// console.log(`Koalas :${averageScoreKoalas}`, `Dolphins :${averageScoreDolphins}`);

// if(averageScoreKoalas < averageScoreDolphins && averageScoreDolphins >= 100) {
//   console.log('Dolphins wins the competition');
// } else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100){
//   console.log('Koalas wins the competition');
// } else if(averageScoreKoalas === averageScoreDolphins && averageScoreDolphins >= 100){
//   console.log('There is a draw');
// } else {
//   console.log('No one wins the trophy');
// }
