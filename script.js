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
    
    
    switch (playerChoice){
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
        default:
            console.log("Invalid input, please try again.")

    }

}

