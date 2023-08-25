const WEAPONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const SEED = Math.floor(Math.random() * WEAPONS.length);
  console.log(WEAPONS[SEED]);
}

getComputerChoice();
