const result = document.querySelector("#result");
const num1 = document.querySelector("#input1");
const num2 = document.querySelector("#input2");

function calculate(operator) {
  const x = parseFloat(num1.value);
  const y = parseFloat(num2.value);
  let res;

  switch (operator) {
    case "+":
      res = x + y;
      break;
    case "-":
      res = x - y;
      break;
    case "*":
      res = x * y;
      break;
    case "/":
      res = x / y;
      break;
    default:
      return;
  }
  result.innerText = res;
}

function resetButton() {
  num1.value = "";
  num2.value = "";
  result.innerText = 0;
}
