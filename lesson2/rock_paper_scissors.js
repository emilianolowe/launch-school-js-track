const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const ROUNDS_TO_WIN = 5;

const WINNING_CONDITIONS = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['rock', 'scissors'],
  lizard: ['spock', 'paper']};

function prompt(message) {
  console.log(`=> ${message}`);
}

function matchOver(playerScore, computerScore) {
  if (playerScore === ROUNDS_TO_WIN || computerScore === ROUNDS_TO_WIN) {
    return true;
  } else {
    return false;
  }
}

function currentScore(playerScore, computerScore) {
  prompt(`Your score: ${playerScore}; Computer's score: ${computerScore}`);
}

function displayGrandWinner(playerScore, computerScore) {
  prompt("The Final Score:");
  currentScore(playerScore, computerScore);
  if (playerScore === ROUNDS_TO_WIN) {
    prompt('you won');
  } else {
    prompt('computer won');
  }
}

function playerWon(playerChoice, computerChoice) {
  if (WINNING_CONDITIONS[playerChoice].includes(computerChoice)) {
    return true;
  } else {
    return false;
  }
}

function computerWon(playerChoice, computerChoice) {
  if (WINNING_CONDITIONS[computerChoice].includes(playerChoice)) {
    return true;
  } else {
    return false;
  }
}

while (true) {

  let playerScore = 0;
  let computerScore = 0;

  // main game
  do {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let playerChoice = readline.question();

    while (!VALID_CHOICES.includes(playerChoice)) {
      prompt("That's not a valid choice");
      playerChoice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${playerChoice}, computer chose ${computerChoice}.`);

    if (playerWon(playerChoice, computerChoice)) {
      prompt('Player won this round');
      playerScore += 1;
    } else if (computerWon(playerChoice, computerChoice)) {
      prompt('computer won this round');
      computerScore += 1;
    } else {
      prompt("It's a tie");
    }
    currentScore(playerScore, computerScore);
  } while (!matchOver(playerScore, computerScore));

  displayGrandWinner(playerScore, computerScore);

  // Once game over ask if want to play againn
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}