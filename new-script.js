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
        return "Rock"; //for checking
    })

    const paper = document.querySelector(".paper");
    paper.addEventListener("click",() => {
        return "Paper";//for checking

    })

    const scissors = document.querySelector(".scissors");
    scissors.addEventListener("click",() => {
        return "Scissors";
    })
}

getPlayerChoice();

})