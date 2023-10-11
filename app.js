const choices = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;


const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');
const gameButtons = document.querySelectorAll('.game-button');
const resetButton = document.getElementById('reset');

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const playerChoice = playerSelection.toLowerCase();

    if(playerChoice === computerSelection) {
        resultsDiv.textContent = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'paper' && computerSelection === 'rock') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {
        resultsDiv.textContent = `You Win! ${playerChoice} beats ${computerSelection}`;
        userScore ++;
    } else {
        resultsDiv.textContent = `You Lose! ${computerSelection} beats ${playerChoice}`;
        computerScore ++;
    }

    updateScore();
}

function updateScore() {
    scoreDiv.textContent = `User: ${userScore} | Computer: ${computerScore}`;
    

    if (userScore === 5 || computerScore === 5) {
        endGame();
    } 
}

function endGame() {
    if (userScore === 5) {
        resultsDiv.textContent = "You win the game!";
        document.getElementById('winGif').style.display = 'block';
    } else if (computerScore === 5) {
        resultsDiv.textContent = "You lose the game!";
        document.getElementById('loseGif').style.display = 'block';
    }

    resetButton.style.display = 'block';
    gameButtons.forEach((button) => {
        button.style.display = 'none';
    });

    resetButton.addEventListener('click', ()=> {
        alert("Game has been reset. Play again ?");
        userScore = 0;
        computerScore = 0;
        scoreDiv.textContent = `User: ${userScore} | Computer: ${computerScore}`;
        resultsDiv.textContent = '';
        resetButton.style.display = 'none';

        document.getElementById('winGif').style.display = 'none';
        document.getElementById('loseGif').style.display = 'none';

        gameButtons.forEach((button) => {
            button.style.display = 'block';
        });
    });
}


gameButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const playerSelection = e.target.id;
        playRound(playerSelection);
    });
});

