'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //let currentScore = Number(document.querySelector('.score').textContent); //Codigo prueba - sin crear una varaible pero usando html
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (secretNumber < guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    //document.querySelector('.score').textContent = currentScore -= 1; //Codigo prueba
  } else if (secretNumber > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    // document.querySelector('.score').textContent = currentScore -= 1; //Codigo prueba
  }
});
