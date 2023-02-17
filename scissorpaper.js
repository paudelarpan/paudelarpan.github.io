  function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
   if(choice==0){
       computer_select="Rock";
     }
    else if(choice==1){
        computer_select="Paper";
    }
    else if(choice==2){
        computer_select="Scissors"; 
    }
        return computer_select;
   }

let your_score =0;
let computer_score =0;


const container=document.querySelector('#container');

const buttons=document.querySelectorAll('button');

buttons.forEach((button) => {button.addEventListener('click',()=>playerSelection(button))});


function playerSelection(button){
    let player_select;
    player_select = button.innerHTML;
    if (computer_score < 5 && your_score < 5) {
        let computer_select = getComputerChoice();
        let result = playRound(player_select, computer_select);
        document.getElementById("round_result").textContent = result;
        document.getElementById("score").textContent = `Your score: ${your_score}  Computer score: ${computer_score}`;
    }  

    if (computer_score == 5) {
        document.getElementById("final_result").textContent = "You lost the game.";
    } 
    
    if (your_score == 5) {
        document.getElementById("final_result").textContent = "You won the game.";
    }
}


function playRound(player_select, computer_select) {
    if (computer_select == player_select) {
        const round_result = "It's a tie";
        return round_result;
    } 
    else if ((computer_select=="Rock" && player_select =="Scissors") || (computer_select=="Paper" && player_select=="Rock") || (computer_select=="Scissors" && player_select=="Paper")) {
        const round_result = `You Lose! ${computer_select} beats ${player_select}`;
        computer_score += 1;
        return round_result;
    } 
    else {
        const round_result = `You Win! ${computer_select} got beaten by ${player_select}`;
        your_score += 1;
        return round_result;
    }
}
   
