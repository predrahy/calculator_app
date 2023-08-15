const clearScreen = () => {
  document.getElementById("result").value = "";
};

const display = (value) => {
  document.getElementById("result").value += value;
};

let ans = [];

let result = 0;

const multiply = (a,b) => {
  return +a * +b;
};

const divide = (a,b) => {
  return +a / +b;
};

const add = (a,b) => {
    return +a+ +b;
};

const substract = (a,b) => {
  return +a - +b;
};

const calculate = () => {

  document.getElementById("result").value = operate();
};

const operate = ()=>{
  let q = document.getElementById("result").value;

  if(q.includes("+")){
    ans = q.split("+");
    return add(ans[0], ans[1]);
  }
  if(q.includes("-")){
    ans = q.split("-");
    return substract(ans[0], ans[1]);
  }
  if(q.includes("/")){
    ans = q.split("/");
    return divide(ans[0], ans[1]);
  }
  if(q.includes("*")){
    ans = q.split("*");
    return multiply(ans[0], ans[1]);
  }
}