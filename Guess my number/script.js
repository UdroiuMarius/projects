'use strict';

// FUNCTION DECLARATIONS

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// const displayScore = function (score) {
//   document.querySelector('.score').textContent = score;
// };

// FUNCTION DECLARATIONS
const displayInfo = function (argument, atribute) {
  if (argument === '.number') {
    document.querySelector(argument).textContent = atribute;
  } else if (argument === '.score') {
    document.querySelector(argument).textContent = atribute;
  } else if (argument === '.message') {
    document.querySelector(argument).textContent = atribute;
  } else if (argument === '.highscore') {
    document.querySelector(argument).textContent = atribute;
  }
};

const generateSecretNumber = function (n) {
  return Math.trunc(Math.random() * n) + 1;
};

//DECLARATIONS
let secretNumber = generateSecretNumber(20);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  //
  const guessedInput = Number(document.querySelector('.guess').value);
  console.log(guessedInput, typeof guessedInput);
  if (!guessedInput) {
    displayMessage('WRONG INPUT');
  } else {
    if (guessedInput === secretNumber) {
      displayInfo('.number', secretNumber);
      displayInfo('.message', 'You guessed the right number!');
      if (score > highScore) {
        highScore = score;
        displayInfo('.highscore', highScore);
      }
      document.querySelector('body').style.backgroundColor = 'green';
    } else if (guessedInput !== secretNumber) {
      if (score > 1) {
        displayInfo(
          '.message',
          guessedInput > secretNumber
            ? 'Too high high high high!'
            : 'Too low low low!'
        );
        score--;
        displayInfo('.score', score);
      } else displayInfo('.message', 'You lost de game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateSecretNumber(20);
  displayInfo('.number', '?');
  displayInfo('.score', score);
  displayInfo('.message', 'Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
