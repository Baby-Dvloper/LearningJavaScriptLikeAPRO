const printForecast = function (arr) {
  let finalString = '';
  for (let i = 0; i < arr.length; i++) {
    let subString = ` ... ${arr[i]}°C in ${i + 1} days`;
    finalString += subString;
  }
  return finalString + ' ...';
};

console.log(printForecast([17, 21, 23]));
