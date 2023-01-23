'use strict';
/*
///////////////////////////////////////////////////////////////////
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