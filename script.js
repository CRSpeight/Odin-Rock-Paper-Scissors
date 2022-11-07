const CHOICES = ["rock", "paper", "scissors"];
const SCORE = { player: 0, computer: 0 };

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let result = playRound(button.id, getComputerChoice());
    if (gameOverCheck()) {
      result += gameOverCheck();
    }
    displayResult(result);
    displayScore();
  });
});

displayScore();

function gameOverCheck() {
  if (Math.max(SCORE.player, SCORE.computer) < 5) {
    return false;
  }
  if (SCORE.computer > SCORE.player) {
    return "Computer wins!";
  }
  return "Player wins!";
}

function displayScore() {
  const playerScore = document.querySelector("#playerScore");
  playerScore.innerHTML = `${SCORE.player}`;
  computerScore.innerHTML = `${SCORE.computer}`;
}

function displayResult(message) {
  const result = document.querySelector("#result");
  const newContent = document.createElement("div");
  newContent.textContent = message;
  result.innerHTML = "";
  result.appendChild(newContent);
}

function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  while (!CHOICES.includes(playerChoice)) {
    playerSelection = prompt("Selection invalid, please try again");
    playerChoice = playerSelection.toLowerCase();
  }

  if (playerChoice === computerSelection) {
    return `Tie! Both players picked ${playerChoice}. `;
  }
  if (
    (playerChoice === "rock" && computerSelection == "scissors") ||
    (playerChoice === `paper` && computerSelection === "rock") ||
    (playerChoice === "scissors" && computerSelection === "paper")
  ) {
    SCORE.player++;
    return `You win! ${playerChoice} beats ${computerSelection}! `;
  } else {
    SCORE.computer++;
    return `You lose! ${computerSelection} beats ${playerChoice}! `;
  }
}
function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}
