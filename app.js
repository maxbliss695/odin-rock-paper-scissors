const CHOICES = { ROCK: "rock", PAPER: "paper", SCISSORS: "scissors" };
const choiceValue = Object.values(CHOICES);

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * choiceValue.length);
  return choiceValue[computerChoice];
}

function getHumanChoice() {
  let humanInput = prompt("Please choose: rock, paper, or scissors.");
  return humanInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  let result = "";

  console.log(`Human choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  switch (true) {
    case humanChoice === computerChoice:
      {
        result = console.log(
          `It's a tie! Neither player gets a point.\n\nHuman score: ${humanScore} \nComputer score: ${computerScore}`
        );
      }
      break;
    case humanChoice === CHOICES.ROCK && computerChoice === CHOICES.SCISSORS:
    case humanChoice === CHOICES.PAPER && computerChoice === CHOICES.ROCK:
    case humanChoice === CHOICES.SCISSORS && computerChoice === CHOICES.ROCK:
      {
        humanScore++;
        result = console.log(
          `You win! ${humanChoice} beats ${computerChoice} \n\nHuman score: ${humanScore} \nComputer score: ${computerScore}`
        );
      }
      break;
    default:
      {
        computerScore++;
        console.log(
          `You lose! ${computerChoice} beats ${humanChoice} \n\nHuman score: ${humanScore} \nComputer score: ${computerScore}`
        );
      }
      break;
  }
}

playRound();
