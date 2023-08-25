const WEAPONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const SEED = Math.floor(Math.random() * WEAPONS.length);
  return WEAPONS[SEED];
}
