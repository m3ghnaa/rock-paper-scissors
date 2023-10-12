const choices = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;


const landingScreen = document.getElementById('landingScreen');
const gameScreen = document.getElementById('gameScreen');
const startGameButton = document.getElementById('startGameButton');

startGameButton.addEventListener('click', () => {
    landingScreen.style.transform = 'translateX(-100%)';
    gameScreen.style.display = 'block'; 
});

const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');
const gameButtons = document.querySelectorAll('.game-button');
const resetButton = document.getElementById('reset');

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const winSound = document.getElementById('win');
winSound.playbackRate = 5;
const loseSound = document.getElementById('lose');
loseSound.playbackRate = 5;

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    
    const playerChoice = playerSelection.toLowerCase();
    const computerChoiceImage = document.getElementById('computerChoiceImage');

    // Set the computer's choice image based on its selection
    computerChoiceImage.src = `${computerSelection}.png`;

    // Display the computer's choice element
    const computerChoiceElement = document.getElementById('computerChoice');
    computerChoiceElement.style.display = 'block';

    // Hide the computer's choice element after 2 seconds
    setTimeout(() => {
        computerChoiceElement.style.display = 'none';
    }, 500);

    if(playerChoice === computerSelection) {
        console.log(computerSelection);
        resultsDiv.textContent = "It's a tie!";
    } else if (
        
        (playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'paper' && computerSelection === 'rock') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {
        console.log(computerSelection);
        winSound.play();
        resultsDiv.textContent = `You Win! ${playerChoice} beats ${computerSelection}`;
        userScore ++;
    } else {
        console.log(computerSelection);
        loseSound.play();
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

const endWinSound = document.getElementById('end-win');
const endLoseSound = document.getElementById('end-lose');





function endGame() {
    if (userScore === 5) {
        endWinSound.play();
        resultsDiv.innerHTML = '<span style="background-color: green; color: white; font-weight: bold; letter-spacing: 2px">YOU WIN THE GAME!</span>';
        document.getElementById('winGif').style.display = 'block';
    } else if (computerScore === 5) {
        endLoseSound.play();
        resultsDiv.innerHTML = '<span style="background-color: red; color: white; font-weight: bold; letter-spacing: 2px">YOU LOSE THE GAME!</span>';
        document.getElementById('loseGif').style.display = 'block';
    }

    
    gameButtons.forEach((div) => {
        div.style.cssText = 'display: none !important;';
    });

    document.getElementsByTagName('h1')[1].style.cssText = 'display:none';

    resetButton.style.display = 'block';

    resetButton.addEventListener('click', ()=> {
        alert("Game has been reset. Play again ?");
        userScore = 0;
        computerScore = 0;
        scoreDiv.textContent = `User: ${userScore} | Computer: ${computerScore}`;
        resultsDiv.textContent = '';
        resetButton.style.display = 'none';

        document.getElementById('winGif').style.display = 'none';
        document.getElementById('loseGif').style.display = 'none';

        gameButtons.forEach((div) => {
            div.style.display = 'block';
        });
        document.getElementsByTagName('h1')[1].style.cssText = 'display:block';
    });
}


gameButtons.forEach((div) => {
    div.addEventListener('click', (e) => {
        const playerSelection = e.target.id;
        playRound(playerSelection);
    });
});
