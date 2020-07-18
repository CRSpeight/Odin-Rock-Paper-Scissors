function updateScore() {
  const pscore = document.querySelector(".pscore");
  const cscore = document.querySelector(".cscore");
  pscore.textContent = playerScore;
  cscore.textContent = computerScore;
}

function computerPlay() {
  const results = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return results[randomChoice];
}

function playRound(playerSelection) {
  const messageBox = document.querySelector("#message");
  const computerSelection = computerPlay();
  if (playerSelection == computerSelection) {
    messageBox.textContent =
      "It's a tie between " + playerSelection + " and " + computerSelection;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    messageBox.textContent =
      "You win! " + playerSelection + " beats " + computerSelection;
    playerScore += 1;
  } else {
    messageBox.textContent =
      "You lose! " + computerSelection + " beats " + playerSelection;
    computerScore += 1;
  }

  if (playerScore == 5 || computerScore == 5) {
    playerScore == 5
      ? (messageBox.textContent = "You win the game!")
      : (messageBox.textContent = "You lose the game. Womp womp.");
    playerScore = 0;
    computerScore = 0;
  }

  updateScore();
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target["id"]);
  });
});
