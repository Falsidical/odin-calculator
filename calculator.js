import { calculate } from './functions.js';
const inputButtons = document.querySelectorAll('button[data-key]');
const opButtons = document.querySelectorAll('button[data-op]');
const screenResult = document.querySelector('#number');
const screenExpression = document.querySelector('#history');

let minusUsed = false;
let result = 0;
let expression = '';

function updateScreen() {
  screenResult.innerText = result;
  screenExpression.innerText = expression;
}

function insertText(key) {
  if (expression.length && !minusUsed && (isNaN(expression.slice(-1)) || isNaN(key.target.dataset.key))) {
    expression += ' ';
  }
  expression += key.target.dataset.key;
  minusUsed = false;
  updateScreen();
  console.log(expression);
}

inputButtons.forEach((btn) => btn.addEventListener('click', insertText));

opButtons[0].addEventListener('click', () => {
  expression += '-';
  minusUsed = true;
  updateScreen();
  console.log(expression);
});

opButtons[1].addEventListener('click', () => {
  expression = expression.slice(0, -1);
  if (expression.slice(-1) === ' ') expression = expression.slice(0, -1);
  updateScreen();
  console.log(expression);
});

opButtons[2].addEventListener('click', () => {
  expression = '';
  result = '0';
  updateScreen();
  console.log(expression);
});

opButtons[4].addEventListener('click', () => {
  result = calculate(expression);
  updateScreen();
  console.log(expression);
});
