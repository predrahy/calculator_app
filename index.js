const clearScreen = () => {
  document.getElementById("result").value = "";
};

const display = (value) => {
  document.getElementById("result").value += value;
};

const backSpace = () => {
  let q = document.getElementById("result").value;
  q = q.slice(0, -1);
};

let ans = [];

const add = () => {
  let q = document.getElementById("result").value;

  if (q.includes("+")) {
    ans = q.split("+");
    return +ans[0] + +ans[1];
  }
};

const subtract = () => {
  let q = document.getElementById("result").value;

  if (q.includes("-")) {
    ans = q.split("-");
    return +ans[0] - +ans[1];
  }
};

const multiply = () => {
  let q = document.getElementById("result").value;

  if (q.includes("*")) {
    ans = q.split("*");
    return +ans[0] * +ans[1];
  }
};

const divide = () => {
  let q = document.getElementById("result").value;

  if (q.includes("/")) {
    ans = q.split("/");
    if (+ans[1] === 0) {
      return "Can't div by 0";
    }
    return +ans[0] / +ans[1];
  }
};

const percent = () => {
  let q = document.getElementById("result").value;
  if (q) return +q / 100;
};

//disable decimal if one already exists
const disableDecimal = () => {
  let q = document.getElementById("result").value;
  if (q.includes(".")) {
    document.getElementById("decimal-btn").disabled = true;
  } else {
    document.getElementById("decimal-btn").disabled = false;
  }
};

//keyboard support
const keySupport = () => {
  let keyInput = document.getElementById("keyboard").value;
  document.addEventListener("keydown", (event) => {
    console.log(event);

    keyInput += event.key;
  });
};

const calculate = () => {
  document.getElementById("result").value = operate();
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
    dot()
  );
};
