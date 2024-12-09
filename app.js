let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.random()
    if (x <= 0.33) {
        return "rock";
    }
    else if ((x > 0.33) && (x <= 0.66)){
        return "paper";
    }
    else if (x > 0.66)   
        return "scissor"
}

function getHumanChoice() {
    while (true){
        const ask = prompt("What is your choice? Enter rock, paper, or scissor");
        const choice = ask.toLowerCase();
        if (choice === "rock" || choice == "paper" || choice == "scissor") {
            return choice;
        }  else {
            alert("Invalid answer! Re-enter your choice");
        }
    }
}


function playRound(humanChoice, computerChoice) {    
    if (
        (humanChoice === "rock" && computerChoice === "scissor") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore+=1;
        return "win";
    } else if (
        (humanChoice === "rock" && computerChoice === "rock") || 
        (humanChoice === "paper" && computerChoice === "paper") || 
        (humanChoice === "scissor" && computerChoice === "scissor")
    ) {
        return "draw";
    } else {
        computerScore+=1;
        return "loss";
    }
}


function playGame () {
    let round = 0;

    while (round < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);    

        console.log(`You chose ${humanSelection} and the computer chose ${computerSelection}. 
                    Your result is a ${result}. 
                    The current score is Human ${humanScore} - Computer ${computerScore}. 
                    Round ${round+1} finished!`);

        round++
    }
    
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("Draw!")
    }
}


playGame()

// Add event listener to all 3 buttons. Once clicked, it initiates playgame(). So if I refresh, it starts a new game. 
// 
// Upon the game ending, the buttons are disabled.