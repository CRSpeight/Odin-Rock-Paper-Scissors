const CHOICES = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let result = playRound(button.id, getComputerChoice());
    displayResult(result);
  });
});

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
    return `Tie! Both players picked ${playerChoice}`;
  }
  if (
    (playerChoice === "rock" && computerSelection == "scissors") ||
    (playerChoice === `paper` && computerSelection === "rock") ||
    (playerChoice === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerChoice} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerChoice}`;
  }
}
function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}
