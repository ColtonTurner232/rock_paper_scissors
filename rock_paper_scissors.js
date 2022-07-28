let playerPoint = 0;
let computerPoint = 0;



//Ask user for their choice and returns only rock, paper, or scissors
function getPlayerChoice() {

    let choice = prompt("Rock, Paper, or Scissors?");

    while ( choice == null) {
        choice = prompt("Rock, Paper, or Scissors?");
    }    

    choice = choice.toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }

    else if (choice !== "rock" || choice !== "paper" || choice !== "scissors") {
        choice = prompt("invalid choice. Rock, Paper, or Scissors?");
        return;
    } 
}

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
        console.log("You Tie!");
        console.log("player: " + playerPoint);
        console.log("computer: " + computerPoint);
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("Paper beats Rock! Computer wins!");
        console.log("player: " + playerPoint);
        console.log("computer: " + computerPoint);
        computerPoint++;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Paper beats Rock! You win!");
        console.log("player: " + playerPoint);
        console.log("computer: " + computerPoint);
        playerPoint++;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Scissors beats Paper! you win!");
        console.log("player: " + playerPoint);
        console.log("computer: " + computerPoint);
        playerPoint++;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("Scissors beats Paper! Computer wins!");
        console.log("player: " + playerPoint);
        console.log("computer: " + computerPoint);
        computerPoint++;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("Rock beats Scissors! Computer wins!");
        console.log("player: " + playerPoint);
        console.log("computer: " + computerPoint);
        computerPoint++;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Rock beats Scissors! you win!");
        console.log("player: " + playerPoint);
        console.log("computer: " + computerPoint);
        playerPoint++;
    }
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
