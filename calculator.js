import { functions } from './functions.js';
const buttons = document.querySelectorAll('.buttons button');
const screenNumber = document.querySelector('#number');
const screenHistory = document.querySelector('#history');

let currentNumber = 0;
let history = [];

function updateScreen() {
  screenNumber.textContent = currentNumber;
  screenHistory.textContent = history.join(' ');
}

function addNumberToScreen(number) {
  if (currentNumber === 0) {
    currentNumber = number;
  } else {
    currentNumber = `${currentNumber}${number}`;
  }
  updateScreen();
}

for (let i = 0; i <= 9; i++) {
  buttons[i].addEventListener('click', addNumberToScreen.bind(null, i));
}

for (let i = 11; i <= 14; i++) {
  buttons[i].addEventListener('click', (e) => {
    history.push(currentNumber, e.target.dataset.op);
    currentNumber = 0;
    updateScreen();
  });
}

buttons[15].addEventListener('click', () => {
  history.push(currentNumber);
  currentNumber = functions[history[history.length - 2]](history[history.length - 3], history[history.length - 1]);
  updateScreen();
  history.push(currentNumber);
});

buttons[16].addEventListener('click', () => {
  currentNumber = 0;
  history = [];
  operation = null;
  updateScreen();
});
