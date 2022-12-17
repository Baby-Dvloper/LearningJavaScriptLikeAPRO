'use strict';
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