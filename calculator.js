import { calculate } from './functions.js';
const inputButtons = document.querySelectorAll('button[data-key]');
const opButtons = document.querySelectorAll('button[data-op]');
const screenResult = document.querySelector('#number');
const screenExpression = document.querySelector('#history');

inputButtons.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    screenExpression.innerText += e.target.dataset.key;
  })
);

opButtons[0].addEventListener('click', () => {
  screenExpression.innerText = screenExpression.innerText.slice(0, -1);
});

opButtons[1].addEventListener('click', () => {
  screenExpression.innerText = '';
  screenResult.innerText = '0';
});

opButtons[3].addEventListener('click', () => {
  screenResult.innerText = calculate(screenExpression.innerText);
});
