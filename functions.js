export const functions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => (b === 0 ? 'ERROR' : a / b),
  '^': (a, b) => a ** b,
};
