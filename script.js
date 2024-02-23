var displayValue = '';
function appendValue(value) {
  if (displayValue === 'Error') {
    displayValue = '';
  }

  if (!isNaN(value) || value === '.' || value === '%') {
    displayValue += value;
  } else if (displayValue !== '' && !isNaN(displayValue[displayValue.length - 1])) {
    displayValue += ' ' + value + ' ';
  }
  updateDisplay();
}


function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculateResult() {
  try {
    var result = eval(displayValue.replace('%', '*0.01'));
    if (isNaN(result) || result === Infinity) {
      throw "Error";
    }
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function deleteLastCharacter() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}
