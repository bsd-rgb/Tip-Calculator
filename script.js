'use strict';
const inputNumPeople = document.getElementById('num-people');
const billAmount = document.getElementById('bill-input');
const radioGroupContainer = document.querySelector('.form-group__radio');
const radioLabels = document.querySelectorAll('.radio__label');
const tipValueDisplay = document.querySelector('.tip__value');
const totalValueDisplay = document.querySelector('.total__value');
const btnReset = document.querySelector('.form__reset_btn');
let tipPercentage = 0;

//console.log(radioGroupContainer);

const calculateTotals = function () {
  // Get the value of the bill
  const bill = Number(billAmount.value);

  // Get the tip percentage [DONE ABOVE]

  // Get the number of people
  const people = Number(inputNumPeople.value);
  if (people === 0) {
    console.log('ERROR');
    return;
  }

  const tip = (bill * tipPercentage) / people;
  const totalBill = (bill + tip) / people;

  // Display the totals
  tipValueDisplay.textContent = tip.toFixed(2);
  totalValueDisplay.textContent = totalBill.toFixed(2);
};

/////// Event Handlers /////////

//Calculate tip after entering num people
inputNumPeople.addEventListener('input', function (event) {
  console.log(inputNumPeople.value);
  calculateTotals();
  btnReset.style.backgroundColor = '#26c2ae';
  btnReset.color = '#00474b';
});

// Setting the Tip % + Visuals
radioGroupContainer.addEventListener('click', function (e) {
  radioLabels.forEach(l => {
    l.style.backgroundColor = '';
    l.style.color = '';
  });

  if (e.target.value !== undefined) {
    tipPercentage = e.target.value;
    e.target.closest('.radio__label').style.backgroundColor = '#26c2ae';
    e.target.closest('.radio__label').style.color = '#00474b';
  }

  calculateTotals();
});
