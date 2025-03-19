// Get display and all buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let firstOperand = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      operator = '';
      firstOperand = '';
      display.textContent = '0';
      resultDisplayed = false;
    } 
    else if (value === '=' || value === 'Enter') {
      if (firstOperand && currentInput && operator) {
        const secondOperand = currentInput;
        let result;

        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(secondOperand);

        switch (operator) {
          case '+':
            result = num1 + num2;
            break;
          case '−':
            result = num1 - num2;
            break;
          case '×':
            result = num1 * num2;
            break;
          case '÷':
            result = num2 !== 0 ? num1 / num2 : 'Error';
            break;
        }

        display.textContent = result;
        currentInput = result.toString();
        firstOperand = '';
        operator = '';
        resultDisplayed = true;
      }
    } 
    else if (['+', '−', '×', '÷'].includes(value)) {
      if (currentInput) {
        firstOperand = currentInput;
        operator = value;
        currentInput = '';
      }
    } 
    else {
      if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
      }
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
