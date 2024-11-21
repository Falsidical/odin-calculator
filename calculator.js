import { functions } from './functions.js';
const buttons = document.querySelectorAll('.buttons button');
const screenNumber = document.querySelector('#number');

let currentNumber = 0;
let n1 = null;
let n2 = null;
let operation = null;

function updateScreen() {
  screenNumber.textContent = currentNumber;
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
    n1 = currentNumber;
    operation = e.target.dataset.op;
    currentNumber = 0;
    updateScreen();
  });
}

buttons[15].addEventListener('click', () => {
  n2 = currentNumber;
  currentNumber = functions[operation](n1, n2);
  updateScreen();
});

buttons[16].addEventListener('click', () => {
  currentNumber = 0;
  n1 = null;
  n2 = null;
  operation = null;
  updateScreen();
});

/*

[2, +, 2, +, 2]

n1  2
op  +
    =
n2  2
c   +
    2

+ n1=4



*/
