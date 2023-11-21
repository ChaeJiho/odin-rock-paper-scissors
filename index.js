
// Make a function called getComputerChoice that randomly selects one of the three options
// Make function 'playRound()' that returns response upon user input.
// Create function that keeps score of user and computer.

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const scoreTextPlayer = document.querySelector("#scoreTextPlayer");
const scoreTextComputer = document.querySelector("#scoreTextComputer");
const resultDiv = document.querySelector(".results");

let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computer = getComputerChoice();
    playerText.textContent = `You: ${player}`;
    computerText.textContent = `Computer: ${playRound()}`;
    scoreTextPlayer.textContent = `You: ${playerScore}`;
    scoreTextComputer.textContent = `Computer: ${computerScore}`;
    checkWinner();
}))

function getComputerChoice() {
    const getNumber = Math.floor(Math.random() * 3) + 1;
    
    if (getNumber == 1) {
        return "rock";
    } else if (getNumber == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound() {
    if (player == 'Rock' && computer == "rock") {
        return 'Rock. Draw!';
    } else if (player == 'Rock' && computer == 'paper') {
        computerScore++;
        return 'Paper. You lose!';
    } else if (player == 'Rock' && computer == 'scissors') {
        playerScore++;
        return 'Scissors. You win!';
    } else if (player == 'Paper' && computer == 'rock') {
        playerScore++;
        return 'Rock. You win!';
    } else if (player == 'Paper' && computer == 'paper') {
        return 'Paper. Draw!';
    } else if (player == 'Paper' && computer == 'scissors') {
        computerScore++;
        return 'Scissors. You lose!';
    } else if (player == 'Scissors' && computer == 'rock') {
        computerScore++;
        return 'Rock. You lose!';
    } else if (player == 'Scissors' && computer == 'paper') {
        playerScore++;
        return 'Paper. You win!';
    } else if (player == 'Scissors' && computer == 'scissors') {
        return 'Scissors. Draw!';
    } else {
        return 'Invalid input. Choose either rock, paper, or scissors.';
    }
}

const checkWinner = () => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = 'You win the game!';
        resultDiv.append(h2);
    } else if (computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = 'You lost. Better luck next time!';
        resultDiv.append(h2);
    }
} 


/*const game = () => {
    for (let i = 1; i <= 5; i++) {
        const computer = getComputerChoice();
        const player = button.textContent;
        playRound();
    }

    if (playerScore > computerScore) {
        return 'You win the game!';
    } else if (playerScore < computerScore) {
        return 'You lost. Better luck next time!';
    } else {
        return "It's a tie!";
    }
}*/ 