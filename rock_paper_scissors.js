let playerPoint = 0;
let computerPoint = 0;

const container = document.querySelector('.container');
const counter = document.querySelector('.counter');
const btn1 = document.querySelector('.button1');
const btn2 = document.querySelector('.button2');
const btn3 = document.querySelector('.button3');

btn1.addEventListener("click", e => {
    let computerSelection = getComputerChoice();
    console.log(playRound("rock", computerSelection))
});
btn2.addEventListener("click", e => {
    let computerSelection = getComputerChoice();
    console.log(playRound("paper", computerSelection));
}); 
btn3.addEventListener("click", e => {
    let computerSelection = getComputerChoice();
    console.log(playRound("scissors", computerSelection));
});  

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

//function that plays a single round and tallies score
function playRound(x, computerSelection) {
    if (x == computerSelection) {
        console.log("You Tie!");
        console.log("player: " + playerPoint);
        console.log("computer: " + computerPoint);
    }
    else if (x == "rock" && computerSelection == "paper") {
        console.log("Paper beats Rock! Computer wins!");
        console.log("player: " + playerPoint);
        console.log("computer: " + computerPoint);
        computerPoint++;
    }
    else if (x == "paper" && computerSelection == "rock") {
        console.log("Paper beats Rock! You win!");
        console.log("player: " + playerPoint);
        console.log("computer: " + computerPoint);
        playerPoint++;
    }
    else if (x == "scissors" && computerSelection == "paper") {
        console.log("Scissors beats Paper! you win!");
        console.log("player: " + playerPoint);
        console.log("computer: " + computerPoint);
        playerPoint++;
    }
    else if (x == "paper" && computerSelection == "scissors") {
        console.log("Scissors beats Paper! Computer wins!");
        console.log("player: " + playerPoint);
        console.log("computer: " + computerPoint);
        computerPoint++;
    }
    else if (x == "scissors" && computerSelection == "rock") {
        console.log("Rock beats Scissors! Computer wins!");
        console.log("player: " + playerPoint);
        console.log("computer: " + computerPoint);
        computerPoint++;
    }
    else if (x == "rock" && computerSelection == "scissors") {
        console.log("Rock beats Scissors! you win!");
        console.log("player: " + playerPoint);
        console.log("computer: " + computerPoint);
        playerPoint++;
    }
}

