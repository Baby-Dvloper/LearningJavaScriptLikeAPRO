// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// // We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Undestanding the problem
// - What is temp amplitute? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And What to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it.

const calcTempAmplitude = function (temps) {
  let max;
  let min;
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] === 'number') {
      max = temps[i];
      min = temps[i];
      console.log(max, min);
      break;
    }
  }
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Funtion should now recieve 2 arrays of temps

// 1) Undestanding the problem
// With two array, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// -Merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max;
  let min;
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] === 'number') {
      max = temps[i];
      min = temps[i];
      break;
    }
  }
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
