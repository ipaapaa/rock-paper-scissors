document.addEventListener("DOMContentLoaded", () => {

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