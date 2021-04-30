let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let singleMode = false;
const multibtn = document.getElementById("Multi-mode");
const modeBtn = document.getElementById("single-mode");
const roundNumberCounter_p = document.querySelector(".round-number-counter ");
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scores_div = document.querySelector(".scores");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

    function startGame(){
        multibtn.addEventListener("click", function(){
            singleMode = false;
            resetGame();
            roundNumberCounter_p.innerHTML = roundNumber;
            alert("Round 1 of 3");
            });
    
    }

    function modeToggle(){ 
        modeBtn.addEventListener("click", function(){
            singleMode = true;
            resetGame();

            if( singleMode == true ){
                roundNumberCounter_p.innerHTML = roundNumber;
                alert("Start");
            }
                
            
        });
        return;
    }
    
    function roundCheckerW(userChoice, computerChoice ){
        playerScore_span.innerHTML = playerScore;
        computerScore_span.innerHTML = computerScore;
        
        if (singleMode == true) {
            result_p.innerHTML = userChoice + " beats " + computerChoice + ". YOU WIN";
           
        }
        else if (singleMode == false){
            result_p.innerHTML = userChoice + " wins you game" ;
            roundLimiterW();
            
        }
        
    }
    
    function roundCheckerL(userChoice, computerChoice){
        playerScore_span.innerHTML = playerScore;
        computerScore_span.innerHTML = computerScore;
        
        if (singleMode == true){
            result_p.innerHTML = userChoice + " loses to " + computerChoice + ". YOU LOSE";
        }
        else if (singleMode == false){
            result_p.innerHTML = userChoice + " lose you game" ;
            roundLimiterL();
            
        }

    }
     


    function win(userChoice, computerChoice){
        playerScore++;
        roundNumber ++;
        
        roundNumberCounter_p.innerHTML = roundNumber;
        
       roundCheckerW(userChoice, computerChoice);
    }
    function lose(userChoice, computerChoice){
        roundNumber ++;
        computerScore++;
        
        playerScore_span.innerHTML = playerScore;
    
        roundCheckerL(userChoice, computerChoice);
    
    }
    function draw(userChoice, computerChoice){  
        roundNumber ++;
        roundNumberCounter_p.innerHTML = roundNumber;
        result_p.innerHTML = userChoice + " the same " + computerChoice + ". Draw";
    
    }

    function roundLimiterL(){
        if (roundNumber == 3 && playerScore == computerScore ){
            console.log("draw")
        }
       while (roundNumber == 3 && computerScore > playerScore) {
          
           setTimeout(() => {
            resetGame();
           }, 5000);
           alert('You lose the rounds game over')
           break;
       }   
    }

    function roundLimiterW(){
        if (roundNumber == 3 && playerScore == computerScore ){
            console.log("draw")
        }
        while (roundNumber == 3 && playerScore > computerScore) {
           
            setTimeout(() => {
             resetGame();
            }, 5000);
            alert('You Win the rounds game over')
            break;
        }   
     }


function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
    roundNumberCounter_p.innerHTML = roundNumber;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = 'Make Your Selection!' 

}



function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissors":
            draw(userChoice, computerChoice);
            break;  
    }
} 

function main() {
    rock_div.addEventListener('click', function(){
        game("rock");
    })
    paper_div.addEventListener('click', function(){
        game("paper");
    })
    scissors_div.addEventListener('click', function(){
        game("scissors");
    })
}
startGame();
modeToggle();

main();