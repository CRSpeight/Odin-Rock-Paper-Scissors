const CHOICES = ['rock', 'paper', 'scissors'];

game(5);

function game(numberOfRounds){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Enter your selection');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    while (!CHOICES.includes(playerChoice)){
        playerSelection = prompt('Selection invalid, please try again');
        playerChoice = playerSelection.toLowerCase();
    }

    if (playerChoice === computerSelection){
        return `Tie! Both players picked ${playerChoice}`;
    }
    if (playerChoice === 'rock' && computerSelection == "scissors" ||
    playerChoice === `paper` && computerSelection === "rock" ||
    playerChoice === "scissors" && computerSelection === "paper"){
        return `You win! ${playerChoice} beats ${computerSelection}`;
    }
    else{
        return `You lose! ${computerSelection} beats ${playerChoice}`;
    }
    

    
}
function getComputerChoice(){
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}