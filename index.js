let output = document.getElementById("result");

const clearScreen = () => {
  output.value = "";
};

const display = (value) => {
  output.value += value;
};

const backSpace = () => {
  output.value = output.value.slice(0, -1);
};

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
  if (output.value.includes(".")) {
    document.getElementById("decimal-btn").disabled = true;
  } else {
    document.getElementById("decimal-btn").disabled = false;
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
  });
};

const calculate = () => {
  output.value = operate();
};

const operate = () => {
  return (
    add() ||
    subtract() ||
    multiply() ||
    divide() ||
    backSpace() ||
    percent() ||
    keySupport() ||
    disableDecimal()
  );
};
