
// Make a function called getComputerChoice that randomly selects one of the three options
// Make function 'playRound()' that returns response upon user input.
// Create function that keeps score of user and computer.

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const scoreText = document.querySelector("#scoreText");



let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computer = getComputerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${playRound()}`;
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

let userScore = 0;
let computerScore = 0;

function playRound() {
    if (player == 'Rock' && computer == "rock") {
        return 'I chose rock. Draw!';
    } else if (player == 'Rock' && computer == 'paper') {
        computerScore++;
        return 'I chose paper. You lose!';
    } else if (player == 'Rock' && computer == 'scissors') {
        userScore++;
        return 'I chose scissors. You win!';
    } else if (player == 'Paper' && computer == 'rock') {
        userScore++;
        return 'I chose rock. You win!';
    } else if (player == 'Paper' && computer == 'paper') {
        return 'I chose paper. Draw!';
    } else if (player == 'Paper' && computer == 'scissors') {
        computerScore++;
        return 'I chose scissors. You lose!';
    } else if (player == 'Scissors' && computer == 'rock') {
        computerScore++;
        return 'I chose rock. You lose!';
    } else if (player == 'Scissors' && computer == 'paper') {
        userScore++;
        return 'I chose paper. You win!';
    } else if (player == 'Scissors' && computer == 'scissors') {
        return 'I chose scissors. Draw!';
    } else {
        return 'Invalid input. Choose either rock, paper, or scissors.';
    }
}

const game = () => {
    for (let i = 1; i <= 5; i++) {
        const computer = getComputerChoice();
        const player = button.textContent;
        playRound();
    }

    if (userScore > computerScore) {
        return 'You win the game!';
    } else if (userScore < computerScore) {
        return 'You lost. Better luck next time!';
    } else {
        return "It's a tie!";
    }
}


/*const game = () => {
    for (let i = 1; i <= 5; i++) {
        const computer = getComputerChoice();
        const player = button.textContent;
        playRound();
    }

    if (userScore > computerScore) {
        return 'You win the game!';
    } else if (userScore < computerScore) {
        return 'You lost. Better luck next time!';
    } else {
        return "It's a tie!";
    }
}*/ 