const WEAPONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const SEED = Math.floor(Math.random() * WEAPONS.length);
  return WEAPONS[SEED];
}

function playRound(playerSelection, computerSelection) {
  const PLAYER = playerSelection.toLowerCase();
  const COMPUTER = computerSelection;

  if (PLAYER === COMPUTER) {
    return "It's a Draw!";
  }

  if (PLAYER === "rock" && COMPUTER === "scissors") {
    return `You win! ${PLAYER} beats ${COMPUTER}`;
  } else if (PLAYER === "paper" && COMPUTER === "rock") {
    return `You win! ${PLAYER} beats ${COMPUTER}`;
  } else if (PLAYER === "scissors" && COMPUTER === "paper") {
    return `You win! ${PLAYER} beats ${COMPUTER}`;
  } else {
    return `You lose! ${COMPUTER} beats ${PLAYER}`;
  }
}
