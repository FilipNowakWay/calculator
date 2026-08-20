let numA = "";
let numB = "";
let operator = "";
let resault = "";

function add(numA, numB) {
  resault = Number(numA) + Number(numB);
  displayResault(resault);
}
function subtract(numA, numB) {
  resault = Number(numA) - Number(numB);
  displayResault(resault);
}

function multiply(numA, numB) {
  resault = Number(numA) * Number(numB);
  displayResault(resault);
}

function divide(numA, numB) {
  resault = Number(numA) / Number(numB);
  displayResault(resault);
}

//Calls one of the functions above
function operate(numA, numB, operator) {
  let a = Number(numA);
  let b = Number(numB);
  let res = 0;

  switch (operator) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "x":
      res = a * b;
      break;
    case "÷":
      if (b === 0) return "Error"; // zabezpieczenie przed dzieleniem przez 0
      res = a / b;
      break;
  }
  return res;
}

function clearDisplay() {
  display.textContent = "";
  clearNumberVariables();
}

function clearNumberVariables() {
  numA = "";
  numB = "";
  operator = "";
  resault = "";
  if (dotButton) dotButton.disabled = false; // Odblokowujemy kropkę przy czyszczeniu
}

function displayResault(resault) {
  display.textContent = resault;
  clearNumberVariables();
}

function displayNumber() {
  display.textContent = `${numA} ${operator} ${numB}`;
}

function setOperator(inputOperator) {
  if (numA !== "" && operator !== "" && numB !== "") {
    resault = operate(numA, numB, operator);
    numA = resault.toString();
    numB = "";
    operator = inputOperator;
    display.textContent = `${numA} ${operator}`;
  }
  // Jeśli użytkownik wpisał tylko numA i klika operator
  else if (numA !== "") {
    operator = inputOperator;
    displayNumber();
  }
}

function updateDotButton() {
  // Sprawdzamy, w której zmiennej aktualnie piszemy
  let currentNumber = operator === "" ? numA : numB;

  // Jeśli obecna liczba ma już kropkę, wyłączamy przycisk kropki
  if (currentNumber.includes(".")) {
    dotButton.disabled = true;
  } else {
    dotButton.disabled = false;
  }
}

function userUpdateInput(number) {
  // Jeśli użytkownik chce wpisać kropkę, a obecna liczba już ją ma -> przerywamy
  if (number === ".") {
    let currentNumber = operator === "" ? numA : numB;
    if (currentNumber.includes(".")) return;
  }

  // Standardowe dopisywanie liczby
  if (operator === "") {
    numA += number;
    displayNumber();
  } else {
    numB += number;
    displayNumber();
  }

  // Po każdym wpisaniu aktualizujemy stan przycisku kropki
  updateDotButton();
}

const numberButtons = document.querySelectorAll(".btn.number");
const operatorButtons = document.querySelectorAll(".btn.operator");
const display = document.querySelector(".display");
const clearDisplayButton = document.querySelector(".btn.special.clear");
const equalButton = document.querySelector(".btn.special.equal");
const dotButton = document.querySelector(".btn.number.dot");

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    userUpdateInput(event.target.textContent);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    setOperator(event.target.textContent);
  });
});

clearDisplayButton.addEventListener("click", () => clearDisplay());
equalButton.addEventListener("click", () => {
  if (numA !== "" && operator !== "" && numB !== "") {
    resault = operate(numA, numB, operator);
    display.textContent = resault;
    numA = resault.toString();
    numB = "";
    operator = "";
  }
});
