
let humanScore		= 0;
let computerScore	= 0;

const buttons								= document.querySelectorAll(".button");
const displayHumanScore			= document.querySelector("#humanScore");
const displayComputerScore	= document.querySelector("#computerScore");
const promptWinner 					= document.querySelector("#promptWinner");

const getComputerChoice = () => {
	let dice = Math.random();
	let result = "";
	console.log( dice);
	if( dice <= 0.3){
		result = "rock";
	}else if ( dice <= 0.6){
		result = "paper";
	}else if ( dice < 1){
		result = "scissors";
	}
	console.log("Computer Choice: " + result);
	return result;
}


const getHumanChoice = (buttonChoice) => {
	let userInput;
	/* userInput = prompt("Rock, Paper, Scissors, Shoot!").toLowerCase(); */
	userInput = buttonChoice;
	console.log("Human Choice " + userInput);
	return userInput;
}



const playRound = (humanChoice, computerChoice) => {
	
	if (humanChoice == computerChoice){
		humanScore;
		computerScore;
	}else if (humanChoice == "paper"  && computerChoice == "rock"){
		humanScore++;
	}else if (humanChoice == "paper"  && computerChoice == "scissors"){
		computerScore++;
	}else if (humanChoice == "rock"  && computerChoice == "scissors"){
		humanScore++;
	}else if (computerChoice == "paper"  && humanChoice == "rock"){
		computerScore++;
	}else if (computerChoice == "paper"  && humanChoice == "scissors"){
		humanScore++;
	}else if (computerChoice == "rock"  && humanChoice == "scissors"){
		computerScore++;
	}
}


const playGame = (buttonHumanChoice) => {
	let i = 0;
	let promptResult = "";
	while (i < 1){
		const computerSelection = getComputerChoice();
		const humanSelection  = getHumanChoice(buttonHumanChoice);
		playRound(humanSelection, computerSelection);
		console.log("Computer: " + computerScore);
		console.log("Humano: " +humanScore);
		console.log(`Round ${i}`);
		i++;
	}

	if ( humanScore == 5 || computerScore == 5){
		if (humanScore == computerScore){
			promptResult = "It's a Tie!";
		}else if (humanScore > computerScore){
			promptResult = "Human Wins!";
		}else {
			promptResult = "Computer Wins!";
		}
	}
	promptWinner.innerText = promptResult;
}





buttons.forEach((btn) => {
	btn.addEventListener( "click", () => {
		let buttonChoice = btn.innerText.toLowerCase();
		playGame(buttonChoice);
		displayHumanScore.innerText = humanScore;
		displayComputerScore.innerText = computerScore;
	});
});


