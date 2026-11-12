// let humanScore = 0;
// let computerScore = 0;

function getComputerChoice() {
  const compChoice = Math.floor(Math.random() * 3) + 1;
  if (compChoice === 1) {
    console.log("rock");
    return "rock";
  } else if (compChoice === 2) {
    console.log("paper");
    return "paper";
  } else {
    console.log("scissors");
    return "scissors";
  }
}

function getHumanChoice() {
  const resp = prompt("your choice?");
  if (resp.toLowerCase() === "rock") {
    return "rock";
  } else if (resp.toLowerCase() === "paper") {
    return "paper";
  } else {
    return "scissors";
  }
}

//plays game 5 times

function playGame(times) {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! rock beats scissors");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("you win! scissors beats paper");
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("you lose! paper beats rock");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("you lose! scissor beats paper");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("you lose! rock beats scissors");
      computerScore++;
    } else {
      console.log("draw!");
    }
    console.log("Human Score = " + humanScore);
    console.log("Computer Score = " + computerScore);
  }

  for (let times = 1; times <= 5; times++) {
    const humanSelection = getHumanChoice();
    const compSelection = getComputerChoice();
    playRound(humanSelection, compSelection);
  }
  if (humanScore > computerScore) {
    console.log("human wins!");
  } else if (humanScore < computerScore) {
    console.log("computer wins");
  } else {
    console.log("draw! no one wins");
  }
}

playGame(5);

//plays round once.
// function playRound(humanChoice, computerChoice) {
//   humanChoice = humanChoice.toLowerCase();
//   if (humanChoice === "paper" && computerChoice === "rock") {
//     console.log("You win! Paper beats Rock");
//     humanScore++;
//   } else if (humanChoice === "rock" && computerChoice === "scissors") {
//     console.log("You win! rock beats scissors");
//     humanScore++;
//   } else if (humanChoice === "scissors" && computerChoice === "paper") {
//     console.log("you win! scissors beats paper");
//     humanScore++;
//   } else if (humanChoice === "rock" && computerChoice === "paper") {
//     console.log("you lose! paper beats rock");
//     computerScore++;
//   } else if (humanChoice === "paper" && computerChoice === "scissors") {
//     console.log("you lose! scissor beats paper");
//     computerScore++;
//   } else if (humanChoice === "scissors" && computerChoice === "rock") {
//     console.log("you lose! rock beats scissors");
//     computerScore++;
//   } else {
//     console.log("draw!");
//   }
//   console.log("Human Score = " + humanScore);
//   console.log("Computer Score = " + computerScore);
// }

// //calls the functions and store their returned values
// const humanSelection = getHumanChoice();
// const compSelection = getComputerChoice();
// //then those values are passed as an arguments to playRound()
// playRound(humanSelection, compSelection);
