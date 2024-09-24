document.addEventListener("DOMContentLoaded", () => {
let PLAYERSCORE = 0;
let COMPUTERSCORE = 0;
let ROUND = 0;

    function getCompChoice(){

    let compChoice = Math.floor(Math.random()*3)
    switch(compChoice){
        case 0: 
            return 'Rock';
                
        case 1: 
            return 'Paper';
                
        case 2: 
            return 'Scissors';
                
        }
       
    }

    function playRound(playerChoice){
        const computer=getCompChoice();
        const player=playerChoice;
        //result 0 means computer won, result 1 means player won, 2 is draw
        let result = 0

        switch (computer){
            case "Rock":
                if (player === "Paper"){
                    result = 1 
                } 
                else if (player === computer){
                    result = 2
                }
                else result = 0 
                break
            
            case "Paper":
                if (player === "Scissors"){
                    result = 1 
                }
                else if (player === computer){
                    result = 2
                } 
                else result = 0 
                break
    
            case "Scissors":
                if(player === "Rock"){
                    result = 1
                }
                else if (player === computer){
                    result = 2
                }
                else result = 0
                break
    
        }
    
        return result
    
    
    }


    

    function playGame(roundResult){

        let result = roundResult;


        if (COMPUTERSCORE == 5){
            announcement("Computer wins the game!");
            COMPUTERSCORE = 0;
            PLAYERSCORE = 0;
            ROUND = 1;

            return;
        }
        else if(PLAYERSCORE == 5){
            announcement("Player wins the game!");
            COMPUTERSCORE = 0;
            PLAYERSCORE = 0;
            ROUND = 1;

            return;
            
        }
        else{
    
        

        switch (result){
            case 0: //COMPWIN
                announcement("Computer wins the round!");
                COMPUTERSCORE++
                ROUND++
                changeComputerScore();
                changeRound();
                
                break

            case 1: //PLAYERWIN
                announcement("Player wins the round!");
                PLAYERSCORE++
                ROUND++
                
                changePlayerScore();
                changeRound();

                break

            case 2://DRAW
                announcement("Draw!");

                ROUND++ 
                changeRound();


                break
        }}

    }

function getPlayerChoice(){
    let playerChoice;
    let result;
    const rock = document.querySelector(".rock");
    rock.addEventListener("click",() => {
        playerChoice = "Rock"; //for checking
        result = playRound(playerChoice);
        playGame(result);
        
    })

    const paper = document.querySelector(".paper");
    paper.addEventListener("click",() => {
        playerChoice = "Paper";//for checking
        result = playRound(playerChoice);
      
        playGame(result);

    })
    
    const scissors = document.querySelector(".scissors");
    scissors.addEventListener("click",() => {
        playerChoice = "Scissors";
        result = playRound(playerChoice);
   
        playGame(result); })
}
        

    function changePlayerScore(){
        const playerScore = document.querySelector(".player-score");
        playerScore.textContent = PLAYERSCORE;
    }

    function changeComputerScore(){
        const computerScore = document.querySelector(".computer-score");
        computerScore.textContent = COMPUTERSCORE;
    }

    function changeRound(){
        const round = document.querySelector(".round-number");
        round.textContent=ROUND;
    }
    function announcement(announceThis){
        const announcement = document.querySelector(".announcement");
        announcement.textContent=announceThis;
    }
    

getPlayerChoice();

})