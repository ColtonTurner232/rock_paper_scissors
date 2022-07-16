//Get a random choice from computer
function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "rock";
    }
    else if (num == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//function that plays a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Paper beats rock! Computer wins!"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Paper beats rock! You win!"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Scissors beats paper! you win!"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Scissors beats paper! computer wins!"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "rock beats scissors! computer wins!"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "rock beats scissors! you win!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

