const choice = ["rock", "paper", "scissors"];
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const outputPlayer = document.querySelector(".playerImg");
const outputComputer = document.querySelector(".computerImg");
const yourScore = document.querySelector("#yourScore");
const computerScore = document.querySelector("#computerScore");
const roundgameCounter = document.querySelector(".round");
const gamemenuModal = document.querySelector(".gameMenu");
const gameOver = document.querySelector(".gameOver");
const play = document.querySelector(".play");
const ok = document.querySelector(".ok");
const whoWins = document.querySelector("#gameOver")
let yourPoints = 0;
let computerPoints = 0;
let playerSelection;
let computerSelection;
let gamenotFinish = true;
let yourCtr = 0;
let computerCtr = 0;
let roundCounter = 1;

gameOver.style.display = "none";

function reset() {
  yourCtr = 0;
  computerCtr = 0;
  roundCounter = 1;
  yourPoints = 0;
  computerPoints = 0;
  gamenotFinish=true;
  playerSelection = "null"
  computerSelection = "null"
  gameRound()
  outputPlayer.innerHTML = ""
  outputComputer.innerHTML = ""
  computerScore.innerHTML =""
  yourScore.innerHTML =""

}

ok.addEventListener("click", () => {
  gameOver.style.display = "none";
  gamemenuModal.style.display = "block";
  reset()
});

play.addEventListener("click", () => {
  gamemenuModal.style.display = "none";
});

function showWhowins(){
  if(yourPoints===3){

    whoWins.innerHTML ="YOU WIN"
  }
  else{
    whoWins.innerHTML ="YOU LOSE"
  }
}

function roundCheck() {
  if (yourPoints === 3 || computerPoints === 3) {
    gamenotFinish = false;
    gameOver.style.display = "block";
    showWhowins()
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

function condtionalScore() {
  if (
    (playerSelection === choice[0] && computerSelection === choice[1]) ||
    (playerSelection === choice[1] && computerSelection === choice[2]) ||
    (playerSelection === choice[2] && computerSelection === choice[0])
  ) {
    computerScore.innerHTML += `<img src="./imgs/starOutline.png" alt="" class="score" />`;
    console.log("You lose");
    computerPoints++;
    roundCheck();
    computerCtr++;
  } else if (playerSelection === computerSelection) {
    console.log("Tie");
  } else {
    yourScore.innerHTML += `<img src="./imgs/starOutline.png" alt="" class="score" />`;
    console.log("You win");
    yourPoints++;
    roundCheck();
    yourCtr++;
  }
}

function gameRound() {
  condtionalScore();
  roundgameCounter.innerHTML = `Round ${roundCounter}`;
  roundCounter++;
}

buttonRock.addEventListener("click", () => {
  // roundCheck();
  if (gamenotFinish) {
    playerSelection = choice[0]; //rock
    getComputerChoice();
    gameRound();
    showOutput();
    roundCheck();
  } else {
    roundCheck();
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

/* pseudocode


*/
