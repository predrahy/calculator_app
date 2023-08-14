const clearScreen = () => {
  document.getElementById("result").value = "";
};

const display = (value) => {
  document.getElementById("result").value += value;
};

let ans = [];

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
    return +ans[0] / +ans[1];
  }
};

const calculate = () => {
  document.getElementById("result").value = operate();
};

const operate = () => {
  multiply();
  divide();
};
