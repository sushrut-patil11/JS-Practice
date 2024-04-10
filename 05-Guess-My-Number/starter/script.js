'use strict';

const SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = SecretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number provided!!!!!';
  } else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = 'Correct Guess!!!!!';
  } else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!!!';
    }
  } else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!!!';
    }
  }
});
