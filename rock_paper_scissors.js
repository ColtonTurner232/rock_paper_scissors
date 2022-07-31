let playerPoint = 0;
let computerPoint = 0;

const container = document.querySelector('.container');
const counter = document.querySelector('.counter');
const h1 = document.querySelector('.h1');
const btn1 = document.querySelector('.button1');
const btn2 = document.querySelector('.button2');
const btn3 = document.querySelector('.button3');
const pScr = document.querySelector('.player-score');
const cScr = document.querySelector('.computer-score');

//Player chooses rock
btn1.addEventListener("click", e => {
    let computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
    winner(playerPoint, computerPoint);
    gameEnd(playerPoint, computerPoint);
    
});

//Player chooses paper
btn2.addEventListener("click", e => {
    let computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
    winner(playerPoint, computerPoint);
    gameEnd(playerPoint, computerPoint);
    
}); 

//player chooses scissors
btn3.addEventListener("click", e => {
    let computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
    winner(playerPoint, computerPoint);
    gameEnd(playerPoint, computerPoint);
    
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
        h1.textContent = "You Tie!";
    }
    else if (x == "rock" && computerSelection == "paper") {
        h1.textContent = "Paper beats Rock! Computer wins!";
        computerPoint++;
        pScr.textContent = "Player Score: " + playerPoint;
        cScr.textContent = "Computer Score: " + computerPoint;
    }
    else if (x == "paper" && computerSelection == "rock") {
        h1.textContent = "Paper beats Rock! You win!";
        playerPoint++;
        pScr.textContent = "Player Score: " + playerPoint;
        cScr.textContent = "Computer Score: " + computerPoint;
    }
    else if (x == "scissors" && computerSelection == "paper") {
        h1.textContent = "Scissors beats Paper! you win!";
        playerPoint++;
        pScr.textContent = "Player Score: " + playerPoint;
        cScr.textContent = "Computer Score: " + computerPoint;
    }
    else if (x == "paper" && computerSelection == "scissors") {
        h1.textContent = "Scissors beats Paper! Computer wins!";
        computerPoint++;
        pScr.textContent = "Player Score: " + playerPoint;
        cScr.textContent = "Computer Score: " + computerPoint;
    }
    else if (x == "scissors" && computerSelection == "rock") {
        h1.textContent = "Rock beats Scissors! Computer wins!";
        computerPoint++;
        pScr.textContent = "Player Score: " + playerPoint;
        cScr.textContent = "Computer Score: " + computerPoint;
    }
    else if (x == "rock" && computerSelection == "scissors") {
        h1.textContent = "Rock beats Scissors! you win!";
        playerPoint++;
        pScr.textContent = "Player Score: " + playerPoint;
        cScr.textContent = "Computer Score: " + computerPoint;
    }
}

//Function that declares overall winner
function winner(playerPoint, computerPoint) {
    if (playerPoint == 5) {
        h1.textContent = "Player Wins!!!";
        h1.style.color = "blue";
    }
    else if (computerPoint == 5) {
        h1.textContent = "Computer Wins!!!";
        h1.style.color = "red";
    }
} 

//Ends game and removes buttons and adds play again button that restarts app
function gameEnd(playerPoint, computerPoint) {
    if (playerPoint === 5 || computerPoint === 5) {
        
        btn1.remove();
        btn2.remove();
        btn3.remove();

        const restartBtn = document.createElement('button');
        restartBtn.classList.add('restart');
        restartBtn.textContent = "Play Again!"
 

        container.append(restartBtn);

        restartBtn.addEventListener("click", e => {
            window.location.reload();
        });
    }
}