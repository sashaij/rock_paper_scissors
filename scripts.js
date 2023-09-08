//scores
let playerScore = 0;
let computerScore = 0;



const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerScores = document.getElementById('player-score');
const compterScores = document.getElementById('computer-score');

const scores = document.querySelector('.scores');

const winnerPlayer = document.createElement('p');
winnerPlayer.classList.add('player-winner');
winnerPlayer.textContent = 'You are the winner!';

const computerWinner = document.createElement('p');
computerWinner.classList.add('computer-winner');
computerWinner.textContent = 'Computer wins! You lose.';



    //player makes a move
    //let playerPick = prompt('Your move: ');

    function getComputerChoice () {

    //generate random number
    let randomNumber = ((Math.random()) * 10).toFixed(2);
    //attach all three moves to a certain value
    if (randomNumber > 0 && randomNumber <= 3.33) {
        return 'Rock';
    } else if (randomNumber > 3.33 && randomNumber <= 6.66) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
    //display the value
}


   //win-loss function
const playRound = function (playerMove, computerMove) {

    console.log(playerScore);
    console.log(computerScore);
    playerScores.textContent = `Player score: ${playerScore}`;
    compterScores.textContent = `Computer score: ${computerScore}`;

    if (playerScore === 5) {
        scores.appendChild(winnerPlayer);
    } else if (computerScore === 5){
        scores.appendChild(computerWinner);
    } else {
        console.log('');
    }
    

    if (computerMove === playerMove) {
        console.log('it\'s a tie');
} else if (playerMove === 'Rock' && computerMove === 'Scissors'){
    console.log(`Computer picked ${computerMove}. You picked ${playerMove}. You win`);
    return playerScore += 1;
} else if (playerMove === 'Rock' && computerMove === 'Paper') {
   console.log(`Computer picked ${computerMove}. You picked ${playerMove}. You lose.`);
   return computerScore += 1; 
} else if (playerMove === 'Paper' && computerMove === 'Scissors' ) {
    console.log(`Computer picked ${computerMove}. You picked ${playerMove}. You lose.`);
     return computerScore += 1;
} else if (playerMove === 'Paper' && computerMove === 'Rock' ) {
    console.log(`Computer picked ${computerMove}. You picked ${playerMove}. You win.`);
    return playerScore += 1;
} else if (playerMove === 'Scissors' && computerMove === 'Rock' ) {
    console.log(`Computer picked ${computerMove}. You picked ${playerMove}. You lose.`);
    return computerScore += 1;
} else if (playerMove === 'Scissors' && computerMove === 'Paper' ) {
    console.log(`Computer picked ${computerMove}. You picked ${playerMove}. You win.`);
    return playerScore += 1;
} else {
    console.log('Wrong input.');
} 




}



rock.addEventListener('click', function(){playRound('Rock', getComputerChoice())});
paper.addEventListener('click', function(){playRound('Paper', getComputerChoice())});
scissors.addEventListener('click', function(){playRound('Scissors', getComputerChoice())});



//play until someone reaches score of 5
/* if (playerScore === 5) {
    console.log('You are the winner.');
} else if (computerScore === 5){
    console.log('computer wins the game');
} else {
    console.log('');
}

}

while (playerScore < 5 && computerScore < 5) {
    game();
} */