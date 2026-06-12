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

/** Calculates the total and displays the value */
const calculateTotals = function () {
  const bill = Number(billAmount.value);
  const people = Number(inputNumPeople.value);

  if (people === 0) return;

  const tip = (bill * tipPercentage) / people;
  const totalBill = (bill + tip) / people;

  tipValueDisplay.textContent = tip.toFixed(2);
  totalValueDisplay.textContent = totalBill.toFixed(2);
};

/** Resets the labels to default */
const resetLabels = function () {
  radioLabels.forEach(l => {
    l.style.backgroundColor = '';
    l.style.color = '';
    l.value = '';
  });
};
/** Updates the background color and text color for the specified element */
const updateColor = function (el, bgColor, txtColor) {
  el.style.backgroundColor = bgColor;
  el.style.color = txtColor;
};

/////// Event Handlers /////////

/** Calculates the total after entering a value in inputNumPeople */
inputNumPeople.addEventListener('input', function (event) {
  calculateTotals();
  updateColor(btnReset, '#26c2ae', '#00474b');
});

/** Set tip + visuals for selected tip amount */
radioGroupContainer.addEventListener('click', function (e) {
  resetLabels();

  if (e.target.value !== undefined) {
    tipPercentage = e.target.value / 100;

    const label = e.target.closest('.radio__label');
    updateColor(label, '#26c2ae', '#00474b');
  }
  calculateTotals();
});

/** Independent listener for custom input */
btnCustom.addEventListener('input', function (e) {
  tipPercentage = e.target.value / 100;
  calculateTotals();
});

/** Resets the input fields and value fields */
btnReset.addEventListener('click', function (e) {
  e.preventDefault();

  inputNumPeople.value = inputNumPeople.defaultVaulue;
  billAmount.value = '';
  tipValueDisplay.textContent = '$0.00';
  totalValueDisplay.textContent = '$0.00';

  resetLabels();
  updateColor(btnReset, '#085c61', '#00474b');
});
