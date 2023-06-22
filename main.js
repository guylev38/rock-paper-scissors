// Global Variables
let humanScoreText = document.getElementById("human-score");
let humanScore = 0;

let computerScoreText = document.getElementById("computer-score");
let computerScore = 0;

let verdict = document.getElementById("verdict");
let humanMove = document.getElementById("human-move");
let computerMove = document.getElementById("computer-move");

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

var humanChoice = "";
var computerChoice = "";

let isGameRunning = false;

// Event Listeners
rockButton.addEventListener("click", () => {
  if(isGameRunning == false) {
    verdict.style.color = "white";
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
  }
  humanChoice = "rock";
  computerPick();
  isGameRunning = true;
  playRound();
  checkGame();
});


paperButton.addEventListener("click", () => {
  if(isGameRunning == false) {
    verdict.style.color = "white";
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
  }
  humanChoice = "paper";
  computerPick();
  isGameRunning = true;
  playRound();
  checkGame();
});

scissorsButton.addEventListener("click", () => {
  if(isGameRunning == false) {
    verdict.style.color = "white";
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
  }
  humanChoice = "scissors";
  computerPick();
  isGameRunning = true;
  playRound();
  checkGame();
});

// Functions 
function checkGame(){
  if(humanScore == 5){
    verdict.textContent = "Player Won The Game !";
    verdict.style.color = "lightgreen";
    resetVariables();
  } else if (computerScore == 5){
    verdict.textContent = "Player Lost the Game !";
    verdict.style.color = "lightcoral";
    resetVariables();
  }
}


function playRound(){
  changeImage();
  if(checkWin() == 0){
    verdict.textContent = "Player Won The Round!";
    humanScore += 1;
    humanScoreText.textContent = humanScore;
  }
  else if(checkWin() == -1){
    verdict.textContent = "Player Lost The Round!"; 
    computerScore += 1;
    computerScoreText.textContent = computerScore;
  }
  else{
    verdict.textContent = "Tie!";
  }
}

function changeImage(){
  switch(humanChoice){
    case "rock":
      humanMove.src = "./Images/rock.png";
      break;
    case "paper":
      humanMove.src = "./Images/paper.png";
      break;
    case "scissors":
      humanMove.src = "./Images/scissors.png";
      break;
    default:
      humanMove.src = "./Images/question_mark.png";
      break;
  }
  
  switch(computerChoice){
    case "rock":
      computerMove.src = "./Images/rock.png";
      break;
    case "paper":
      computerMove.src = "./Images/paper.png";
      break;
    case "scissors":
      computerMove.src = "./Images/scissors.png";
      break;
    default:
      computerMove.src = "./Images/question_mark.png"
      break;
  }
}

function checkWin(){
  // If human wins -> return 0;
  // If human loses -> return -1;
  // If tie -> return 1; 

  // Tie
  if(humanChoice == computerChoice)
    return 1;

  // Human win cases
  if(humanChoice == "rock" && computerChoice == "scissors") 
    return 0;
  else if(humanChoice == "paper" && computerChoice == "rock")
    return 0;
  else if(humanChoice == "scissors" && computerChoice == "paper")
    return 0;

  // Computer win cases
  if(computerChoice == "rock" && humanChoice == "scissors") 
    return -1;
  else if(computerChoice == "paper" && humanChoice == "rock")
    return -1;
  else if(computerChoice == "scissors" && humanChoice == "paper")
    return -1;
}

function computerPick(){
  var options = ['rock', 'paper', 'scissors'];
  computerChoice = options[Math.floor(Math.random() * options.length)];
}

function resetVariables(){
  isGameRunning = false;

  humanChoice = "";
  computerChoice = "";

  humanScore = 0;
  computerScore = 0;

}
