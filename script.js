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

function getPlayerChoice(){
    
    console.log("[0] Rock")
    console.log("[1] Paper")
    console.log("[2] Scissors")
    
    let playerChoice = prompt("Enter your choice [number]:")
    
    
    
    switch (parseInt(playerChoice)){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            console.log("Invalid input, please try again.")

    }

}

function playRound(){
    const computer=getCompChoice()
    const player=getPlayerChoice()
    //result 0 means computer won, result 1 means player won, 2 is draw
    let result = 0
    console.log(computer)
    console.log(player)
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

function playGame(){
    let computerScore = 0
    let playerScore = 0
    let round = 1

    while (computerScore < 3  || playerScore < 3 ){
        let result = playRound()
        switch (result){
            case 0: 
                computerScore++
                round++
                console.log("Computer wins the round!")
                break

            case 1: 
                playerScore++
                round++
                console.log("You win the round!")
                break

            case 2:
                round++
                console.log("Draw!") 
                break
        }

    }

    

}


