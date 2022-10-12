const choice = ["rock", "paper", "scissors"];

function gameRound(playerSelection, computerSelection) {
  function getComputerChoice() {
    return Math.floor(Math.random() * 3);
  }

  computerSelection = choice[getComputerChoice()];
  playerSelection = prompt("pili ka boi");
  
  if (
    (playerSelection === choice[0] && computerSelection === choice[1]) ||
    (playerSelection === choice[1] && computerSelection === choice[2]) ||
    (playerSelection === choice[2] && computerSelection === choice[0])
  ) {
    return `${playerSelection} < ${computerSelection} loser`;
  } else if (playerSelection === computerSelection) {
    return `${playerSelection} == ${computerSelection} tie`;
  } else {
    return `${playerSelection} > ${computerSelection} winner`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(gameRound());
  }
}

game();
