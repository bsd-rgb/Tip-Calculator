'use strict';
const inputNumPeople = document.getElementById('num-people');
const billAmount = document.getElementById('bill-input');

const calculateTotals = function () {
  // Get the value of the bill
  const bill = billAmount.value;

  // Get the tip percentage

  // Get the number of people
  const people = inputNumPeople.value;

  // Calculate the totals bill + (tipPercentage * bill) / numPeople
  // Tip = (bill * tipPercentage) / numPeople
  // Total = ((bill * tipPercentage) + bill) / numPeople

  // Display the totals
};

// Event Handlers

//Calculate tip after entering num people
inputNumPeople.addEventListener('input', function (event) {
  console.log(inputNumPeople.value);
});
