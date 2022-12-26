// Calculator javaScript

const exp = document.querySelector('.expression');
const answer = document.querySelector('.answer');
const nums = document.querySelectorAll('.num');
const operations = document.querySelectorAll('.operation');
const enter = document.getElementById('result');
const backspace = document.getElementById('backspace');
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
    flag = true;
    mathType = e.currentTarget.dataset.id;
    exp.textContent = `${num1}`;
    expression = `${num1}`;
  });
});

enter.addEventListener('click', math);

// Functions

// Get two values from user
function getValues(e) {
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
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (mathType) {
    case 'plus': {
      result = num1 + num2;
      console.log(result);
      displayAndResetCalc('+');
      break;
    }
    case 'minus': {
      result = num1 - num2;
      displayAndResetCalc('-');
      break;
    }
    case 'mul': {
      result = num1 * num2;
      displayAndResetCalc('*');
      break;
    }
    case 'div': {
      result = num1 / num2;
      displayAndResetCalc('/');
      break;
    }
  }
}

// reset calculator
function displayAndResetCalc(mathType) {
  exp.textContent = `${expression} ${mathType} ${num2}`;
  answer.textContent = `Ans       ${result}`;
  flag = false;
  num1 = 0;
  num2 = 0;
}
