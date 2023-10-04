function getComputerChoice() {
const choices = ['Rock', 'Paper', 'Scissors'];
const randomIndex = Math.floor(Math.random() * choices.length);
return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const choices = ['rock', 'paper', 'scissors'];

    if(playerChoice === computerSelection.toLowerCase()) {
        return "It's a tie!";
    }else if (
        (playerChoice === 'rock' && computerSelection.toLowerCase() === 'scissors') || 
        (playerChoice === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerChoice === 'scissors' && computerSelection.toLowerCase() === 'paper')
     ) {
            return `You Win! ${playerChoice} beats ${computerSelection}`;
        }
    else {
        return `You lose! ${computerSelection} beats ${playerChoice}` ;
    }
    
    
}

const computerSelection = getComputerChoice()
console.log(playRound('Rock', computerSelection));
