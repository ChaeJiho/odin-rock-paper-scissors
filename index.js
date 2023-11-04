// Create a prompt requiring user input of either rock, paper, or scissors
// Make a function called getComputerChoice that randomly selects one of the three options




prompt("Let's play rock, paper, scissors!");

function getComputerChoice() {

    const getNumber = Math.floor(Math.random() * 3) + 1;
    
    if (getNumber == 1) {
        return "Rock";
    } else if (getNumber == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {

}

console.log(getComputerChoice());