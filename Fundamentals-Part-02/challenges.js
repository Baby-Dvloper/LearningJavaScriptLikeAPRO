'use strict';
/*
// /////////////////////////////////////////////////////////////////
// ######## Challenge 1
const calcAverage = (a, b, c) => (a + b + c) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if(avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (averageKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log('Anyone wins')
  }
}

// const averageDolphins = calcAverage(44, 23, 71);
// const averageKoalas = calcAverage(65, 54, 49);

const averageDolphins = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);

checkWinner(averageDolphins, averageKoalas);
console.log(averageDolphins, averageKoalas);
*/

/*
// //////////////////////////////////////////////////////////////////
// ######## Challenge 2

const calcTip = function (bill) {
  // if(bill >= 50 && bill <= 300) {
  //   return bill * 0.15;
  // } else {
  //   return bill * 0.2;
  // }
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(total);
*/

/*
// /////////////////////////////////////////////////////////////////////////
// ######## Challenge 3
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  // mass: 92,
  // height: 1.95,

  calcBMI: function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  // mass: 78,
  // height: 1.69,

  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
}

//  Three forms of do it.

// const higherBMI = mark.calcBMI() > john.calcBMI() ? `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`: `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`;

// console.log(higherBMI);

if(john.calcBMI() > mark.calcBMI()){
  console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`);
} else if(john.calcBMI() < mark.calcBMI()){
  console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`);
}

const markHasHigherBMI = mark.calcBMI() > john.calcBMI() ? true : false;

console.log(`${markHasHigherBMI ? mark.fullName : john.fullName}'s BMI (${markHasHigherBMI ? mark.BMI : john.BMI}) is higher than ${markHasHigherBMI ? john.fullName : mark.fullName}'s (${markHasHigherBMI ? john.BMI : mark.BMI})`);
*/

// ///////////////////////////////////////////////////////////////////

// Challenge 4
const calcTip = function(bill){
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++) {
  // tips.push(calcTip(bills[i]));
  // totals.push(tips[i] + bills[i]);
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(tips, totals);

// Bonus

const calcAverage = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum+=arr[i];
  }
  console.log(sum);
  return sum / arr.length;
}

console.log(calcAverage(totals));