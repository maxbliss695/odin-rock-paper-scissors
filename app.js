const CHOICES = { ROCK: "rock", PAPER: "paper", SCISSORS: "scissors" };
const choiceValue = Object.values(CHOICES);

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * choiceValue.length);
  return choiceValue[computerChoice];
}

function getHumanChoice() {
  do {
    let humanChoice = prompt("Please choose: rock, paper, or scissors.");
    if (humanChoice == null) {
      getHumanChoice();
    } else if (humanChoice === "") {
      alert("Prompt was left empty. Please make a choice.");
      getHumanChoice();
    } else {
      humanChoice = humanChoice.toLocaleLowerCase().trim();
      if (choiceValue.includes(humanChoice)) {
        return humanChoice;
      } else {
        humanChoice = prompt(
          "That was an invalid choice. \n\nPlease choose: rock, paper, or scissors."
        )
          .toLocaleLowerCase()
          .trim();
        return humanChoice;
      }
    }
  } while (true);
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

function main() {
  let currentRound = 0;
  let totalRounds = 5;

  for (let i = currentRound; i < totalRounds; i++) {
    playRound();
  }
}
main();
