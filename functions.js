const operators = {
  '+': { precedence: 1, associativity: 'left', calculate: (a, b) => a + b },
  '-': { precedence: 1, associativity: 'left', calculate: (a, b) => a - b },
  x: { precedence: 2, associativity: 'left', calculate: (a, b) => a * b },
  '÷': { precedence: 2, associativity: 'left', calculate: (a, b) => (b === 0 ? 'Math ERROR' : a / b) },
  '^': { precedence: 3, associativity: 'right', calculate: (a, b) => a ** b },
};

// RPN Parser using shunting yard algorithm
function RPNParser(expression) {
  const outputQueue = [];
  const operatorStack = [];
  const tokens = expression.split(' ');

  tokens.forEach((token) => {
    if (!isNaN(Number(token))) {
      outputQueue.push(token);
    } else if (operators[token]) {
      while (
        operatorStack.length &&
        operators[operatorStack[operatorStack.length - 1]] &&
        ((operators[token].associativity === 'left' && operators[token].precedence <= operators[operatorStack[operatorStack.length - 1]].precedence) ||
          (operators[token].associativity === 'right' && operators[token].precedence < operators[operatorStack[operatorStack.length - 1]].precedence))
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.push(token);
    } else if (token === '(') {
      operatorStack.push(token);
    } else if (token === ')') {
      while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.pop();
    }
  });
  return [...outputQueue, ...operatorStack.reverse()];
}

function evaluateRPN(tokens) {
  console.log(tokens);
  const outputQueue = [];

  tokens.forEach((token) => {
    if (!isNaN(Number(token))) {
      outputQueue.push(token);
    } else if (operators[token]) {
      let n2 = Number(outputQueue.pop());
      let n1 = Number(outputQueue.pop());
      outputQueue.push(operators[token].calculate(n1, n2));
    }
  });
  return outputQueue;
}

export function calculate(expression) {
  return evaluateRPN(RPNParser(addSpaces(expression)));
}

function addSpaces(expression) {
  let result = '';
  let isPreviousCharOperator = true;
  for (let i = 0; i < expression.length; i++) {
    let item = expression[i];
    if (!isNaN(item) || item === '.') {
      result += item;
      isPreviousCharOperator = false;
    } else if (item === '-') {
      if (isPreviousCharOperator) {
        result += item;
      } else {
        result += ` ${item} `;
      }
    } else {
      result += ` ${item} `;
      isPreviousCharOperator = true;
    }
  }
  return result.trim().replace(/\s+/g, ' ');
}
