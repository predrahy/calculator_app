let output = document.getElementById("result");
let inputArray = [];

// assigned precendence to operators
let operators = {
  "*": 2,
  "/": 2,
  "+": 1,
  "-": 1,
  "%": 2,
};

const clearScreen = () => {
  output.value = "";
  inputArray = [];
};

// new display function code
const display = (value) => {
  const lastChar = output.value.slice(-1);

  if (value === "." && output.value.includes(".")) {
    return;
  }

  if (!operators.hasOwnProperty(value)) {
    if (output.value === "0" || operators.hasOwnProperty(lastChar)) {
      output.value = value;
    } else {
      output.value += value;
    }
    inputArray.push(value);
  } else {
    if (!operators.hasOwnProperty(lastChar)) {
      output.value += value;
      inputArray.push(value);
    } else if (value === "-" && lastChar !== "-") {
      output.value += value;
      inputArray.push(value);
    } else if (lastChar !== "-" && lastChar !== "=") {
      output.value = output.value.slice(0, -1) + value;
      inputArray[inputArray.length - 1] = value;
    }
  }
};
//display function code finished

const backSpace = () => {
  output.value = output.value.slice(0, -1);
  inputArray.pop();
};

// code to evaluate expression
const evaluateExpression = () => {
  let operandStack = [];
  let operatorStack = [];

  let currentOperand = "";

  for (let i = 0; i < inputArray.length; i++) {
    let token = inputArray[i];

    if (!operators.hasOwnProperty(token)) {
      currentOperand += token;
    } else {
      operandStack.push(parseFloat(currentOperand));
      currentOperand = "";

      while (
        operatorStack.length > 0 &&
        operators[operatorStack[operatorStack.length - 1]] >= operators[token]
      ) {
        let operator = operatorStack.pop();
        let operand2 = operandStack.pop();
        let operand1 = operandStack.pop();

        operandStack.push(performOperation(operand1, operand2, operator));
      }

      operatorStack.push(token);
    }
  }

  operandStack.push(parseFloat(currentOperand));

  while (operatorStack.length > 0) {
    let operator = operatorStack.pop();
    let operand2 = operandStack.pop();
    let operand1 = operandStack.pop();

    operandStack.push(performOperation(operand1, operand2, operator));
  }

  if (operandStack.length === 1) {
    output.value = operandStack[0];
    inputArray = [operandStack[0]];
  } else {
    output.value = "Error";
    inputArray = [];
  }
};
// code to evaluate expression finished

// code to perform operation
const performOperation = (operand1, operand2, operator) => {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      if (operand2 === 0) {
        output.value = "Can't div by 0";
        throw new Error("Division by zero");
      }
      return operand1 / operand2;
    case "%":
      return operand1 % operand2;
    default:
      throw new Error("Invalid operator");
  }
};
// code to perform operation  end here

let ans = [];

const add = () => {
  if (output.value.includes("+")) {
    ans = output.value.split("+");
    return +ans[0] + +ans[1];
  }
};

const subtract = () => {
  if (output.value.includes("-")) {
    ans = output.value.split("-");
    return +ans[0] - +ans[1];
  }
};

const multiply = () => {
  if (output.value.includes("*")) {
    ans = output.value.split("*");
    return +ans[0] * +ans[1];
  }
};

const divide = () => {
  if (output.value.includes("/")) {
    ans = output.value.split("/");
    if (+ans[1] === 0) {
      return "Can't div by 0";
    }

    return +ans[0] / +ans[1];
  }
};

const percent = () => {
  if (output.value) {
    return (output.value = +output.value / 100);
  }
};

//disable decimal if one already exists
const disableDecimal = () => {
  if (!output.value.includes(".")) {
    display('.');
  }
};

//keyboard support
const keySupport = () => {
  document.addEventListener("keydown", (event) => {

    const restrictAlphabet = (e) => {
      let x = e.which || e.keycode;
      if (x >= 48 && x <= 57) {
        return true;
      } else {
        return false;
      }
    };
    restrictAlphabet();
    output.value += event.key;
  })
};

const calculate = () => {
  // output.value = operate();
  evaluateExpression();
};

const operate = () => {
  return (
    add() ||
    subtract() ||
    multiply() ||
    divide() ||
    backSpace() ||
    percent() ||
    keySupport()
  );
};
