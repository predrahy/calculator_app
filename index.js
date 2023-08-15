// Function clear screen
function clearScreen() {
  document.getElementById("result").value = "";
}

// Function backspace
function backSpace() {
  const currentInput = document.getElementById("result").value;
  document.getElementById("result").value = currentInput.slice(0, -1);
}

// Function to add to the input
function display(value) {
  document.getElementById("result").value += value;
};

let ans = [];

const add = () => {
  let q = document.getElementById("result").value;
  if (q.includes("+")) {
    ans = q.split("+");
    console.log(+ans[0] + +ans[1]);
  }
};

const subtract = () => {
  let q = document.getElementById("result").value;
  if (q.includes("-")) {
    ans = q.split("-");
    console.log(+ans[0] - +ans[1]);
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
    return +ans[0] / +ans[1];
  }
};

const percent = () => {
  let q = document.getElementById("result").value;
  console.log(q / 100);
};

const backSpace = () => {
  document.getElementById("result").value.substr(0, -1);
};

const calculate = () => {
  document.getElementById("result").value = operate();
};

const operate = () => {
  add();
  subtract();
  multiply();
  divide();
  backSpace();
  percent();
};
