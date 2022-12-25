// Calculator javaScript

const exp = document.querySelector('.expression');
const answer = document.querySelector('.answer');
const btns = document.querySelectorAll('.box');

let num1;
let num2;
let result;
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const btnType = e.currentTarget.dataset.id;
    console.log(btnType);
    if (btnType >= 0 && btnType <= 9) {
      num1 = `${btnType}`;
      num1 = parseFloat(num1);
      console.log(num1);
    }
    if (
      btnType === 'div' ||
      btnType === 'mul' ||
      btnType === 'minus' ||
      btnType === 'plus'
    ) {
      console.log('hello');
    }
    if (btnType === '') {
    }
  });
});
