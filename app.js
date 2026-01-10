const CHOICES = { ROCK: "rock", PAPER: "paper", SCISSORS: "scissors" };
const choiceValue = Object.values(CHOICES);

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * choiceValue.length);
  return choiceValue[computerChoice];
}

console.log(getComputerChoice());

function getHumanChoice() {
  let humanInput = prompt("Please choose: rock, paper, or scissors.");
  return humanInput;
}

console.log(getHumanChoice());
