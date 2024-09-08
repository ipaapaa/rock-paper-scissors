document.addEventListener("DOMContentLoaded", () => {
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
    let playerChoice;

    const rock = document.querySelector(".rock");
    rock.addEventListener("click",() => {
        playerChoice = "Rock";
        console.log(playerChoice); //for checking
    })

    const paper = document.querySelector(".paper");
    paper.addEventListener("click",() => {
        playerChoice = "Paper";
        console.log(playerChoice); //for checking

    })

    const scissors = document.querySelector(".scissors");
    scissors.addEventListener("click",() => {
        playerChoice = "Scissors";
        console.log(playerChoice); //for checking
    })

    do {

   
    
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
   
    console.log("Computer: " + computerScore)
    console.log("Player: " + playerScore)

    while (computerScore < 3 && playerScore < 3 ){
        console.log("Round: " + round)
        let result  = playRound()
       

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
        console.log("Computer: " + computerScore)
        console.log("Player: " + playerScore)

    }

    console.log("Computer: " + computerScore)
    console.log("Player: " + playerScore)

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

}