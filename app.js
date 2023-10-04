function getComputerChoice() {
const choices = ['Rock', 'Paper', 'Scissors'];
const randomIndex = Math.floor(Math.random() * choices.length);
return choices[randomIndex];
}

function getUserChoice() {
    let userChoice = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(userChoice) ){
        userChoice = prompt("Invalid choice. Please choose Rock, Paper or Scissors:").toLowerCase();
    }
    return userChoice;
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
        return `You Lose! ${computerSelection} beats ${playerChoice}` ;
    }
    
    
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    for(let i=0; i <5; i++){
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(userChoice, computerChoice);

        console.log(`Round ${i + 1}: ${roundResult}`)

        if (roundResult.includes("Win")) {
            userScore++;
        } else if (roundResult.includes("Lose")) {
            computerScore++;
        }
    }

    let gameResult;

    if (userScore > computerScore) {
        gameResult = "You win the game!";
    } else if (userScore < computerScore) {
        gameResult = "You lose the game!";
    } else {
        gameResult = "It's a tie!";
    }

    console.log(`Game Over! ${gameResult}`);
}


game();
