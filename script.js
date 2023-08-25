// TODO: add validation for user selection
// TODO: add draw condition for game()

// scores
let playerScore = 0;
let computerScore = 0;

const WEAPONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const SEED = Math.floor(Math.random() * WEAPONS.length);
  return WEAPONS[SEED];
}

function playRound(playerSelection, computerSelection) {
  // sanitize player input
  const PLAYER = playerSelection.toLowerCase().trim();
  const COMPUTER = computerSelection;

  if (PLAYER === COMPUTER) {
    return "It's a Draw!";
  }

  if (PLAYER === "rock" && COMPUTER === "scissors") {
    playerScore++;
    return `You win this round! ${PLAYER} beats ${COMPUTER}`;
  } else if (PLAYER === "paper" && COMPUTER === "rock") {
    playerScore++;
    return `You win this round! ${PLAYER} beats ${COMPUTER}`;
  } else if (PLAYER === "scissors" && COMPUTER === "paper") {
    playerScore++;
    return `You win this round! ${PLAYER} beats ${COMPUTER}`;
  } else {
    computerScore++;
    return `You lose this round! ${COMPUTER} beats ${PLAYER}`;
  }
}

function game() {
  // game loop
  for (let i = 0; i < 5; i++) {
    const PLAYERCHOICE = prompt("Rock Paper Scisscors?");
    const COMPUTERCHOICE = getComputerChoice();
    console.log(playRound(PLAYERCHOICE, COMPUTERCHOICE));
  }

  console.log(
    playerScore > computerScore ? "You win the game!" : "You lose the game!"
  );
}

game();
