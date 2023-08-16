const clearScreen = () => {
  document.getElementById("result").value = "";
};

const display = (value) => {
  document.getElementById("result").value += value;
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

  return +q / 100;
};

const backSpace = () => {
  let q = document.getElementById("result").value;

  return q.slice(0, -1);
};

const calculate = () => {
  document.getElementById("result").value = operate();
};

const operate = () => {
  return (
    add() || subtract() || multiply() || divide() || backSpace() || percent()
  );
};
