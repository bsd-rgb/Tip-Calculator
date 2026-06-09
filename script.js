'use strict';
const inputNumPeople = document.getElementById('num-people');
const billAmount = document.getElementById('bill-input');
const radioGroupContainer = document.querySelector('.form-group__radio');
const radioLabels = document.querySelectorAll('.radio__label');
const tipValueDisplay = document.querySelector('.tip__value');
const totalValueDisplay = document.querySelector('.total__value');
const btnReset = document.querySelector('.form__reset_btn');
const btnCustom = document.querySelector('.radio__label-custom');

let tipPercentage = 0;
billAmount.value = '';
btnCustom.value = '';
inputNumPeople.value = '';

const calculateTotals = function () {
  const bill = Number(billAmount.value);
  const people = Number(inputNumPeople.value);

  if (people === 0) return;

  const tip = (bill * tipPercentage) / people;
  const totalBill = (bill + tip) / people;

  tipValueDisplay.textContent = tip.toFixed(2);
  totalValueDisplay.textContent = totalBill.toFixed(2);
};

/////// Event Handlers /////////

//Calculate tip after entering num people
inputNumPeople.addEventListener('input', function (event) {
  calculateTotals();

  btnReset.style.backgroundColor = '#26c2ae';
  btnReset.color = '#00474b';
});

// Setting the Tip % + Visuals
radioGroupContainer.addEventListener('click', function (e) {
  radioLabels.forEach(l => {
    l.style.backgroundColor = '';
    l.style.color = '';
    l.value = '';
  });

  if (e.target.value !== undefined) {
    tipPercentage = e.target.value / 100;

    e.target.closest('.radio__label').style.backgroundColor = '#26c2ae';
    e.target.closest('.radio__label').style.color = '#00474b';
  }

  calculateTotals();
});

// On reset
btnReset.addEventListener('click', function (e) {
  e.preventDefault();

  inputNumPeople.value = inputNumPeople.defaultVaulue;
  billAmount.value = '';
  tipValueDisplay.textContent = '$0.00';
  totalValueDisplay.textContent = '$0.00';

  radioLabels.forEach(l => {
    l.style.backgroundColor = '';
    l.style.color = '';
  });

  btnReset.style.backgroundColor = '#085c61';
  btnReset.style.color = '#00474b';
});

btnCustom.addEventListener('input', function (e) {
  tipPercentage = e.target.value / 100;
  calculateTotals();
});
