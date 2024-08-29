
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
    let invalidInput = false

    do {
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
            invalidInput = true

    }} while (invalidInput == true)

}

function playRound(){
    const computer=getCompChoice()
    const player=getPlayerChoice()
    //result 0 means computer won, result 1 means player won, 2 is draw
    let result = 0
    console.log("Computer: " + computer)
    console.log("Player: " + player)
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
    let play = true

    do {

    let computerScore = 0
    let playerScore = 0
    let round = 1
    console.log("Round: " + round)

    while (computerScore < 3 && playerScore < 3 ){
        let result  = playRound()
        console.log("Round: " + round)
        console.log("Computer: " + computerScore)
        console.log("Player: " + playerScore)
        
        switch (result){
            case 0: 
                computerScore++
                console.log("Computer wins the round!")
                round++
                
                break

            case 1: 
                playerScore++
                console.log("You win the round!")
                round++
                break

            case 2:
                console.log("Draw!")
                round++ 

                break
        }

    }

    if (computerScore > playerScore){
        console.log("Computer wins the game!")
    }
    else{
        console.log("Player wins the game!")
    }

    let playAgain = prompt("Press [X] to exit. Press any button to play again.").toLowerCase()
    
    if (playAgain === 'x'){
        play = false}

  

    } while (play === true)
}

playGame()

