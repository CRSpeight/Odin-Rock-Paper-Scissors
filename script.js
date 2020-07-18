function computerPlay() {
  const results = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return results[randomChoice];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  if (playerSelection == computerSelection) {
    console.log(
      "It's a tie between " + playerSelection + " and " + computerSelection
    );
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log("You win! " + playerSelection + " beats " + computerSelection);
    return "win";
  } else {
    console.log("You lose! " + computerSelection + " beats " + playerSelection);
    return "lose";
  }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target["id"]);
  });
});
