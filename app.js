// Calculator javaScript

const exp = document.querySelector('.expression');
const answer = document.querySelector('.answer');
const nums = document.querySelectorAll('.num');
const operations = document.querySelectorAll('.operation');
const enter = document.getElementById('result');
const del = document.getElementById('backspace');
const clear = document.getElementById('clear');

let num1 = '';
let num2 = '';
let result;
let mathType;
let expression;
let flag = false;

// Event listeners

nums.forEach(function (num) {
  num.addEventListener('click', getValues);
});

operations.forEach(function (operation) {
  operation.addEventListener('click', function (e) {
    if (num1 === '') return;
    flag = true;
    mathType = e.currentTarget.dataset.id;
    exp.textContent = `${num1}`;
    expression = `${num1}`;
  });
});

enter.addEventListener('click', math);
clear.addEventListener('click', clearAll);
del.addEventListener('click', backspace);
// Functions

// Get two values from user
function getValues(e) {
  if (num1 === '') {
    exp.textContent = '';
  }
  if (!flag) {
    const num = e.currentTarget.dataset.id;
    num1 += num;
    console.log('num1', num1);
    answer.textContent = num1;
  } else {
    const num = e.currentTarget.dataset.id;
    num2 += num;
    console.log('num2', num2);
    answer.textContent = num2;
  }
}
// Maths
function math(e) {
  // If equal pressed without entering 2nd number
  if (num2 === '') return;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (mathType) {
    case 'plus': {
      result = num1 + num2;
      console.log(result);
      displayResult('+');
      resetCalc();
      break;
    }
    case 'minus': {
      result = num1 - num2;
      displayResult('-');
      resetCalc();
      break;
    }
    case 'mul': {
      result = num1 * num2;
      displayResult('*');
      resetCalc();
      break;
    }
    case 'div': {
      result = num1 / num2;
      displayResult('/');
      resetCalc();
      break;
    }
    default:
      break;
  }
}

// display result
function displayResult(mathType) {
  exp.textContent = `${expression} ${mathType} ${num2}`;
  answer.textContent = `Ans       ${result}`;
}
// reset calculator
function resetCalc() {
  flag = false;
  num1 = '';
  num2 = '';
  mathType = '';
}
// clear display
function clearAll() {
  exp.textContent = '';
  answer.textContent = '';
  resetCalc();
}
// Backspace
function backspace() {
  if (!flag) {
    num1 = num1.slice(0, -1);
    answer.textContent = num1;
  } else {
    num2 = num2.slice(0, -1);
    answer.textContent = num2;
  }
}
