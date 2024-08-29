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
    
    console.log("[1] Rock")
    console.log("[2] Paper")
    console.log("[3] Scissors")
    
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
    //result 0 means computer won, result 1 means player won
    let result = 0

    switch (computer){
        case "Rock":
            if (player === "Paper"){
                result = 1 
            } 
            else result = 0 
        
        case "Paper":
            if (player === "Scissors"){
                result = 1 
            } 
            else result = 0 

        case "Scissors":
            if(player === "Rock"){
                result = 1
            }
            else result = 0

    }

    return result


}


