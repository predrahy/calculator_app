let currentExpression = "";
let currentInput = "";

function appendNumber(number) {
    currentInput += number;
    currentExpression += number;
    updateDisplay();
}

function appendDecimal() {
    if (currentInput.includes('.')) return;
    currentInput += '.';
    currentExpression += '.';
    updateDisplay();
}

function operation(operator) {
    if (['+', '-', '*', '/'].includes(currentExpression.slice(-1))) {
        // If the last character is an operator, replace it with the new operator.
        currentExpression = currentExpression.slice(0, -1);
    } 
    // Append the new operator
    currentExpression += operator;

    // Reset current input
    currentInput = "";
    
    updateDisplay();
}

function calculate() {
    let values = [];
    let operations = [];
    let tokens = currentExpression.split(/([+\-*/])/);
    
    for (let token of tokens) {
        if (['+', '-', '*', '/'].includes(token)) {
            operations.push(token);
        } else {
            values.push(parseFloat(token));
        }
    }

    let result = values[0];

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case '+':
                result += values[i + 1];
                break;
            case '-':
                result -= values[i + 1];
                break;
            case '*':
                result *= values[i + 1];
                break;
            case '/':
                if (values[i + 1] === 0) {
                    alert("Error, Please don't divide by 0!");
                    clearDisplay();
                    return;
                }
                result /= values[i + 1];
                break;
        }
    }

    currentInput = result.toString().substring(0, 8);
    currentExpression = currentInput;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentExpression;
}

function clearDisplay() {
    currentExpression = "";
    currentInput = "";
    updateDisplay();
}

function deleteLast() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
    } else if (currentExpression.length > 0) {
        currentExpression = currentExpression.slice(0, -1);
    }
    updateDisplay();
}

// Keyboard support:
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') appendNumber(e.key);
    else if (e.key === '.') appendDecimal();
    else if (['+', '-', '*', '/'].includes(e.key)) operation(e.key);
    else if (e.key === 'Enter' || e.key === '=') calculate();
    else if (e.key === 'Backspace') deleteLast();
    else if (e.key === 'Escape') clearDisplay();
});
