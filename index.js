
// Make a function called getComputerChoice that randomly selects one of the three options
// Make function 'playRound()' that returns response upon user input.
// Create function that keeps score of user and computer.

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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == "rock") {
        alert('I chose rock. Draw!');
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        alert('I chose paper. You lose!');
        computerScore++;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        alert('I chose scissors. You win!');
        userScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        alert('I chose rock. You win!');
        userScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        alert('I chose paper. Draw!');
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        alert('I chose scissors. You lose!');
        computerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        alert('I chose rock. You lose!');
        computerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        alert('I chose paper. You win!');
        userScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        alert('I chose scissors. Draw!');
    } else {
        alert('Invalid input. Choose either rock, paper, or scissors.');
    }
}

const game = () => {
    for (let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Let's play rock, paper, scissors!").toLowerCase();
        playRound(playerSelection, computerSelection);
    }

    if (userScore > computerScore) {
        alert('You win the game!');
    } else if (userScore < computerScore) {
        alert('You lost. Better luck next time!');
    } else {
        alert("It's a tie!");
    }
}
console.log(game());