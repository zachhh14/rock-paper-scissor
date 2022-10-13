const choice = ["rock", "paper", "scissors"];

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
let outputPlayer = document.querySelector(".playerImg");
let outputComputer = document.querySelector(".computerImg");
let playerSelection;
let computerSelection;

buttonRock.addEventListener("click", () => {
  playerSelection = choice[0]; //rock
  getComputerChoice();
  randomFunction();
  showOutput()
  // outputPlayer.innerHTML = `<img src="./imgs/rock.png" alt=""/>`;
});

function showOutput() {
  if (playerSelection === choice[0]) {
    outputPlayer.innerHTML = `<img src="./imgs/rock.png" alt="" class="imgOutput"/>`;
  }
  else if(playerSelection === choice[1]){
    outputPlayer.innerHTML = `<img src="./imgs/paper.png" alt="" class="imgOutput"/>`;
  }else if(playerSelection === choice[2]){
    outputPlayer.innerHTML = `<img src="./imgs/scissors.png" alt="" class="imgOutput"/>`;
  }
  if (computerSelection === choice[0]) {
    outputComputer.innerHTML = `<img src="./imgs/rock.png" alt="" class="imgOutput"/>`;
  }
  else if(computerSelection === choice[1]){
    outputComputer.innerHTML = `<img src="./imgs/paper.png" alt="" class="imgOutput"/>`;
  }else if(computerSelection === choice[2]){
    outputComputer.innerHTML = `<img src="./imgs/scissors.png" alt="" class="imgOutput"/>`;
  }
}

buttonPaper.addEventListener("click", () => {
  playerSelection = choice[1]; //paper
  getComputerChoice();
  randomFunction();
  showOutput()
});

buttonScissors.addEventListener("click", () => {
  playerSelection = choice[2]; //scissors
  getComputerChoice();
  randomFunction();
  showOutput()
});

function randomFunction() {
  console.log(`Player: ${playerSelection}`);
  console.log(`Computer: ${computerSelection}`);
  gameRound();
}

function getComputerChoice() {
  computerSelection = choice[Math.floor(Math.random() * 3)];
  return computerSelection;
}

function gameRound() {
  if (
    (playerSelection === choice[0] && computerSelection === choice[1]) ||
    (playerSelection === choice[1] && computerSelection === choice[2]) ||
    (playerSelection === choice[2] && computerSelection === choice[0])
  ) {
    console.log("You lose");
  } else if (playerSelection === computerSelection) {
    console.log("Tie");
  } else {
    console.log("You win");
  }
}

/* pseudocode
player pick a hand
  computer pick a hand(random)
  rock<scissors
  paper<rock
  scissors<paper
  rock===rock
  paper===paper
  scissors===scissors
  5x





*/

// function gameRound(playerSelection, computerSelection) {
//   function getComputerChoice() {
//     return Math.floor(Math.random() * 3);
//   }

//   computerSelection = choice[getComputerChoice()];

//   if (
//     (playerSelection === choice[0] && computerSelection === choice[1]) ||
//     (playerSelection === choice[1] && computerSelection === choice[2]) ||
//     (playerSelection === choice[2] && computerSelection === choice[0])
//   ) {
//     return `${playerSelection} < ${computerSelection} loser`;
//   } else if (playerSelection === computerSelection) {
//     return `${playerSelection} == ${computerSelection} tie`;
//   } else {
//     return `${playerSelection} > ${computerSelection} winner`;
//   }
// }

// function game() {
//   for (let i = 0; i < 5; i++) {
//     console.log(gameRound());
//   }
// }
