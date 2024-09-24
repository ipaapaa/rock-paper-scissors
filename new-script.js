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
            console.log("Computer wins the game!")
            COMPUTERSCORE = 0;
            PLAYERSCORE = 0;
            ROUND = 1;

            return;
        }
        else if(PLAYERSCORE == 5){
            console.log("Player wins the game!")
            COMPUTERSCORE = 0;
            PLAYERSCORE = 0;
            ROUND = 1;

            return;
            
        }
        else{
    
        

        switch (result){
            case 0: //COMPWIN
                COMPUTERSCORE++
                ROUND++
                
                break

            case 1: //PLAYERWIN
                PLAYERSCORE++
                ROUND++
                break

            case 2://DRAW
                ROUND++ 

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
   
        playGame(result);
        

    })

    
    
}



getPlayerChoice();

})