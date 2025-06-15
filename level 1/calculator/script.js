let display = document.getElementById('display');
let currentInput = '';
let resultDisplayed = false;

function input(value) {
  if (resultDisplayed) {
    if (['+', '-', '*', '/', '%'].includes(value)) {
      resultDisplayed = false;
    } else {
      currentInput = '';
      resultDisplayed = false;
    }
  }

  currentInput += value;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

function toggleSign() {
  if (currentInput) {
    if (currentInput.startsWith('-')) {
      currentInput = currentInput.slice(1);
    } else {
      currentInput = '-' + currentInput;
    }
    display.textContent = currentInput;
  }
}

function calculate() {
  try {
    const result = eval(currentInput);
    display.textContent = parseFloat(result.toFixed(4));
    currentInput = result.toString();
    resultDisplayed = true;
  } catch (e) {
    display.textContent = 'Error';
    currentInput = '';
  }
}
