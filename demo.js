let humanScore = 0;
let computerScore = 0;
let round = 0;

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

function handleGameEnd(){
    if (round >=5){
        let finalMessage = ""
        if (humanScore > computerScore) {
            finalMessage = `You won the game!`;
        } else if (humanScore < computerScore) {
            finalMessage = `You lost the game!`;
        } else {
            finalMessage = `It's a draw!`;
        }
        document.querySelector('.round-result').textContent = finalMessage;

        // Reset for a new game
        humanScore = 0;
        computerScore = 0;
        round = 0;
        humanChoice="";
        computerChoice="";
        
    }
}


function updateUI(humanChoice, computerChoice, round, result) {
    document.querySelector('.computer-choice').textContent = `${computerChoice}`;
    document.querySelector('#game-score').textContent = `Round: ${round + 1} | Score: ${humanScore}-${computerScore}`;
    document.querySelector('.round-result').textContent = `You ${result} the round!`;
}


// Initiate game by pressing onclick
let humanChoice = document.querySelector('.human-choice')
humanChoice.addEventListener('click', (event) => {
    let target = event.target;
        if (['rock', 'paper', 'scissor'].includes(target.id)) {
            const humanChoice = target.id;
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);
            updateUI(humanChoice, computerChoice, round, result);  
            round++;
            handleGameEnd();

        }
});



// Add event listener to all 3 buttons. Once clicked, it initiates playgame(). So if I refresh, it starts a new game. 
// EL needs to: 
    // onclick show different UI to indicate button was clicked
    // initiate getcomputer choice and get humanchoice
    // update round div
    // update score div
    // show computer choice
    // show round winner
    // on round 5, show game winner and disable game
// Upon the game ending, the buttons are disabled.