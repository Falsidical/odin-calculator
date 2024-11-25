import { calculate } from './functions.js';
const inputButtons = document.querySelectorAll('button[data-key]');
const opButtons = document.querySelectorAll('button[data-op]');
const screenResult = document.querySelector('#number');
const screenExpression = document.querySelector('#history');

inputButtons.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    screenHistory.innerText += e.target.dataset.key;
  })
);

opButtons[0].addEventListener('click', () => {
  screenHistory.innerText = screenHistory.innerText.slice(0, -1);
});

opButtons[1].addEventListener('click', () => {
  screenHistory.innerText = '';
  screenResult.innerText = '';
});

opButtons[3].addEventListener('click', () => {
  screenResult.innerText = calculate(screenHistory.innerText);
});
