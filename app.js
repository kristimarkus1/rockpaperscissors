let playerScore = 0;
let computerScore = 0;
let round = 1;
const maxRounds = 3;

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const roundDisplay = document.getElementById("round");
const gameResultDisplay = document.getElementById("game-result");

let gameStarted = false;

function playRound(playerChoice) {
    if (!gameStarted) {
      
      gameStarted = true; 
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    if (result === "win") {
        playerScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    playerScoreDisplay.textContent = `You:  ${playerScore}`;
    computerScoreDisplay.textContent = `Computer:  ${computerScore}`;

    round++;
    roundDisplay.textContent = round;

    gameResultDisplay.innerHTML += `<p>You ${result}! Computer chose ${computerChoice}.</p>`;

    if (round > maxRounds) {
        declareWinner();
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(player, computer) {
    if (player === computer) return "tie";
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "win";
    }
    return "lose";
}

function declareWinner() {
  let winner = playerScore > computerScore ? "You win the game!" : "Computer wins the game!";
  if (playerScore === computerScore) {
      winner = "It's a tie!";
  }

  gameResultDisplay.innerHTML += `<p>${winner}</p>`;
  document.querySelector(".choices").style.display = "none"; 
  document.getElementById("restart-btn").style.display = "inline-block"; 
  roundDisplay.style.display = "none";

  if (winner === "You win the game!") {
      createFireworks(); 
  } else if (winner === "Computer wins the game!") {
      createSadFace(); 
  }
}


function restartGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;

  playerScoreDisplay.textContent = `You:  ${playerScore}`; 
  computerScoreDisplay.textContent = `Computer:  ${computerScore}`; 
  roundDisplay.textContent = `${round}/${maxRounds}`; 

  gameResultDisplay.textContent = "Choose an option to start playing!";
  document.querySelector(".choices").style.display = "block";

  document.getElementById("restart-btn").style.display = "inline-block"; 
  roundDisplay.style.display = "inline"; 
}

function createFireworks() {
  const fireworksDiv = document.createElement("div");
  fireworksDiv.classList.add("fireworks");
  fireworksDiv.innerHTML = "✨🎊✨🎊✨";
  document.body.appendChild(fireworksDiv);


  setTimeout(() => {
      fireworksDiv.remove();
  }, 4000); 
}

function createSadFace() {
  const sadFaceDiv = document.createElement("div");
  sadFaceDiv.classList.add("sad-face");
  sadFaceDiv.innerHTML = "😢";
  document.body.appendChild(sadFaceDiv);

  setTimeout(() => {
      sadFaceDiv.remove();  
  }, 4000); 
}

