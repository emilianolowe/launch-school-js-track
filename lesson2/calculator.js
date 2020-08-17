// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

// Requirements:
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("Welcome to the Calculator Program!\n");

prompt("What is the first number?");
let numberOne = readline.question();

while (invalidNumber(numberOne)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  numberOne = readline.question();
}

prompt("What is the second number?");

let numberTwo = readline.question();

while (invalidNumber(numberTwo)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  numberTwo = readline.question();
}

prompt("What is the operation you want to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Must choose 1, 2, 3, 4");
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = numberOne + numberTwo;
    break;
  case '2':
    output = numberOne - numberTwo;
    break;
  case '3':
    output = numberOne * numberTwo;
    break;
  case '4':
    output = numberOne / numberTwo;
    break;
}

console.log( `The result is ${output}` );

