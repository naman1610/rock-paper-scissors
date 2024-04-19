const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerChoice) {
    switch (playerSelection) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    return "Draw";
                case 'paper':
                    return "You lose! Paper beats Rock";
                case 'scissors':
                    return "You win! Rock beats Scissors";
                default:
                    break;
            }
            break;
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    return "You win! Paper beats Rock";
                case 'paper':
                    return "Draw";
                case 'scissors':
                    return "You lose! Scissors beats Paper";
                default:
                    break;
            }
            break;
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    return "You lose! Rock beats Scissors";
                case 'paper':
                    return "You win! Scissors beats Paper";
                case 'scissors':
                    return "Draw";
                default:
                    break;
            }
            break;
        default:
            break;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice: rock, paper or scissors");
        let computerChoice = getComputerChoice();
        let result = playRound(playerSelection.toLowerCase(), computerChoice.toLowerCase());
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a draw!");
    }
}

playGame();