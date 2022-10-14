const choice = ["rock", "paper", "scissors"];
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const outputPlayer = document.querySelector(".playerImg");
const outputComputer = document.querySelector(".computerImg");
const yourScore = document.querySelector("#yourScore");
const computerScore = document.querySelector("#computerScore");
const roundgameCounter = document.querySelector(".round");
let yourPoints = 0;
let computerPoints = 0;
let playerSelection;
let computerSelection;
let gamenotFinish = true;
let yourCtr = 0;
let computerCtr = 0;
let roundCounter = 1;

function roundCheck() {
  if (yourPoints === 3 || computerPoints === 3) {
    gamenotFinish = false;
  }
}

roundgameCounter.innerHTML = `Round ${roundCounter}`;

function showOutput() {
  if (playerSelection === choice[0]) {
    outputPlayer.innerHTML = `<img src="./imgs/rock.png" alt="" class="imgOutput"/>`;
  } else if (playerSelection === choice[1]) {
    outputPlayer.innerHTML = `<img src="./imgs/paper.png" alt="" class="imgOutput"/>`;
  } else if (playerSelection === choice[2]) {
    outputPlayer.innerHTML = `<img src="./imgs/scissors.png" alt="" class="imgOutput"/>`;
  }
  if (computerSelection === choice[0]) {
    outputComputer.innerHTML = `<img src="./imgs/rock.png" alt="" class="imgOutput"/>`;
  } else if (computerSelection === choice[1]) {
    outputComputer.innerHTML = `<img src="./imgs/paper.png" alt="" class="imgOutput"/>`;
  } else if (computerSelection === choice[2]) {
    outputComputer.innerHTML = `<img src="./imgs/scissors.png" alt="" class="imgOutput"/>`;
  }
}

buttonRock.addEventListener("click", () => {
  roundCheck();
  if (gamenotFinish) {
    playerSelection = choice[0]; //rock
    getComputerChoice();
    gameRound();
    showOutput();
  }
});

buttonPaper.addEventListener("click", () => {
  roundCheck();
  if (gamenotFinish) {
    playerSelection = choice[1]; //paper
    getComputerChoice();
    gameRound();
    showOutput();
  }
});

buttonScissors.addEventListener("click", () => {
  roundCheck();
  if (gamenotFinish) {
    playerSelection = choice[2]; //scissors
    getComputerChoice();
    gameRound();
    showOutput();
  }
});

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
    computerScore.innerHTML += `<img src="./imgs/starOutline.png" alt="" class="score" />`;
    console.log("You lose");
    computerPoints++;
    computerCtr++;
  } else if (playerSelection === computerSelection) {
    console.log("Tie");
  } else {
    yourScore.innerHTML += `<img src="./imgs/starOutline.png" alt="" class="score" />`;
    console.log("You win");
    yourPoints++;
    yourCtr++;
  }
  roundgameCounter.innerHTML = `Round ${roundCounter}`;
  roundCounter++;
}

/* pseudocode


*/