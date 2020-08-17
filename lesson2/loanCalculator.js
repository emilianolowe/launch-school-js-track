// Ask the user for the loan amount
// Ask the user for the Annual Percentage Rate (APR)
// Ask the user for the loan duration
// Calculate the monthly interest rate
// Calculate the loan duration in months
// Print the results to the console
//
// Use the following formula: 
// let monthlyPayment = loanAmount * (mIR / (1 - Math.pow((1 + j), (-loanDurationinMonths))));

// Requirements:
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

prompt("Welcome to the Loan Calculator Program!\n");

while (true) {

  prompt("What is the loan amount in dollars?");

  let amount = readline.question();

  while (isInvalidNumber(amount)) {
    prompt("Please enter a positive numer");
    amount = readline.question();
  }

  prompt("What is the Annual Percentage Rate (APR)?");
  prompt("Example: 5 for 5% or 2.5 for 2.5%");

  let interestRate = readline.question();

  while (isInvalidNumber(interestRate)) {
    prompt("Must enter a positive number");
    interestRate = readline.question();
  }

  prompt("What is the loan duration in years?");

  let loanDurationYears = readline.question();

  while (isInvalidNumber(loanDurationYears)) {
    prompt("Must enter a positive number");
    loanDurationYears = readline.question();
  }

  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(loanDurationYears) * 12;

  let monthlyPayment = Number(amount) *
                    (monthlyInterestRate /
                    (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));

    prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

    prompt("Another calculation?");
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] === 'n') break;
}