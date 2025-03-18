
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
	let dice = Math.random();
	let result = "";
	console.log( dice);
	if( dice <= 0.3){
		result = "rock";
		console.log("Es Piedra");
	}else if ( dice <= 0.6){
		result = "paper";
		console.log("Es Papel");
	}else if ( dice < 1){
		result = "scissor";
		console.log("Es Tijera");
	}

	return result;
}


const getHumanChoice = () => {
	let userInput;
	userInput = prompt("Rock, Paper, Scissors, Shoot!").toLowerCase();
	console.log(userInput);
	return userInput;
}



const playRound = (humanChoice, computerChoice) => {
	
	if (humanChoice == computerChoice){
		humanScore++;
		computerScore++;
	}else if (humanChoice == "paper"  && computerChoice == "rock"){
		humanScore++;
	}else if (humanChoice == "paper"  && computerChoice == "scissor"){
		computerScore++;
	}else if (humanChoice == "rock"  && computerChoice == "scissor"){
		humanScore++;
	}else if (computerChoice == "paper"  && humanChoice == "rock"){
		computerScore++;
	}else if (computerChoice == "paper"  && humanChoice == "scissor"){
		humanScore++;
	}else if (computerChoice == "rock"  && humanChoice == "scissor"){
		computerScore++;
	}
}


const playGame = () => {
	let i = 0;
	while (i < 5){
		const computerSelection = getComputerChoice();
		const humanSelection  = getHumanChoice();
		playRound(humanSelection, computerSelection);
		console.log(humanScore);
		console.log(computerScore);
		console.log(`Round ${i}`);
		i++;
	}

	if (humanScore == computerScore){
		console.log("Nadie gana");
	}else if (humanScore > computerScore){
		console.log("Tú ganas");
	}else {
		console.log("Machine gana");
	}
}

playGame();


/* papel > rock 
papel < scissor
rock > scissor */



