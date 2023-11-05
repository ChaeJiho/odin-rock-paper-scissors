// Create a prompt requiring user input of either rock, paper, or scissors
// Make a function called getComputerChoice that randomly selects one of the three options
// Make function 'playRound()' that prompts user to choose rock, paper, or scissors and 

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

prompt("Let's play rock, paper, scissors!");

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == "rock") {
        return 'I chose rock. Draw!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'I chose paper. You lose!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'I chose scissors. You win!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'I chose rock. You win!';
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'I chose paper. Draw!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'I chose scissors. You win!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'I chose rock. You lose!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'I chose paper. You win!';
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'I chose scissors. Draw!';
    }
}

const computerSelection = getComputerChoice();

console.log(playRound('rock', computerSelection));