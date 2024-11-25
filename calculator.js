import { calculate } from './functions.js';
const inputButtons = document.querySelectorAll('button[data-key]');
const opButtons = document.querySelectorAll('button[data-op]');
const screenResult = document.querySelector('#number');
const screenHistory = document.querySelector('#history');

let insertSpace = true;
function insertText(key) {
  if (isNaN(screenHistory.innerText.slice(-1)) || isNaN(key.target.dataset.key)) insertSpace = true;
  screenHistory.innerText += `${insertSpace ? ' ' : ''}${key.target.dataset.key}`;
}

inputButtons.forEach((btn) => btn.addEventListener('click', insertText));

opButtons[0].addEventListener('click', () => {
  screenHistory.innerText += '-';
});

opButtons[1].addEventListener('click', () => {
  screenHistory.innerText = screenHistory.innerText.slice(0, -1);
});

opButtons[2].addEventListener('click', () => {
  screenHistory.innerText = '';
  screenResult.innerText = '0';
});

opButtons[4].addEventListener('click', () => {
  screenResult.innerText = calculate(screenHistory.innerText);
});
