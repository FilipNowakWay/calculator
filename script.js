let numA = '';
let numB = '';
let operator = '';
let resault = '';


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
  switch (operator) {
    case '+':
      add(numA, numB);
      break;
    case '-':
      subtract(numA, numB);
      break;
    case 'x':
      multiply(numA, numB);
      break;
    case '÷':
      divide(numA, numB);
      break;
  }

}

function clearDisplay() {
  display.textContent = '';
}

function clearNumberVariables() {
  numA = '';
  numB = '';
  operator = '';
}

function displayResault(resault) {
  display.textContent = resault;
  clearNumberVariables();
}

function displayNumber() {
  if (operator === '') display.textContent = numA;
  else if (operator && numB === '') display.textContent = `${numA} ${operator}`;
  else display.textContent = `${numA} ${operator} ${numB} `;
}

function setOperator(inputOperator) {
  operator = inputOperator;
  displayNumber()
}

function userUpdateInput(number) {
  if (operator === '') {
    numA += number;
    displayNumber();
  }
  else {
    numB += number;
    displayNumber();
  }
}

const numberButtons = document.querySelectorAll('.btn.number');
const operatorButtons = document.querySelectorAll('.btn.operator');
const display = document.querySelector('.display');
const clearDisplayButton = document.querySelector('.btn.special.clear');
const equalButton = document.querySelector('.btn.special.equal')

numberButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    userUpdateInput(event.target.textContent);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    setOperator(event.target.textContent);
  });
});

clearDisplayButton.addEventListener('click', () => clearDisplay());
equalButton.addEventListener('click', () => operate(numA, numB, operator));
