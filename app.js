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
        let ask = prompt("What is your choice? Enter rock, paper, or scissor");
        if (ask === "rock" || ask == "paper" || ask == "scissor") {
            return String(ask);
            break;
        }  else {
            alert("Invalid answer! Re-enter your choice");
        }
    }
}


 function playRound(humanChoice, computerChoice) {
    alert(`You chose ${humanSelection} and the computer chose ${computerSelection}.`)
    if ((humanChoice === "rock" && computerChoice === "scissor") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissor" && computerChoice === "paper")) {
           humanScore += 1;
           alert(`You win! The score is ${humanScore} - ${computerScore}`)
        } else if ((humanChoice === "rock" && computerChoice === "rock") || 
        (humanChoice === "paper" && computerChoice === "paper") || 
        (humanChoice === "scissor" && computerChoice === "scissor")) {
            alert(`Draw! The score is ${humanScore} - ${computerScore}`);
        }
        else {
            computerScore += 1;
            alert(`You lose! The score is ${humanScore} - ${computerScore}`);
        }
 }

 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();

 console.log(humanSelection)
 console.log(computerSelection)

 playRound(humanSelection, computerSelection);

 function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    
 }
