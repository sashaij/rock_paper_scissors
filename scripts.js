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

const computerPick = getComputerChoice();

   //win-loss function
const playRound = function (playerMove, computerMove) {

    if (computerMove === playerMove) {
        console.log('it\'s a tie');
} else if (playerMove === 'Rock' && computerMove === 'Scissors'){
    console.log(`Computer picked ${computerMove}. You picked ${playerMove}. You win`);
} else if (playerMove === 'Rock' && computerMove === 'Paper') {
   console.log(`Computer picked ${computerMove}. You picked ${playerMove}. You lose.`); 
} else if (playerMove === 'Paper' && computerMove === 'Scissors' ) {
    console.log(`Computer picked ${computerMove}. You picked ${playerMove}. You lose.`);
} else if (playerMove === 'Paper' && getComputerChoice === 'Rock' ) {
    console.log(`Computer picked ${computerMove}. You picked ${playerMove}. You win.`);
} else if (playerMove === 'Scissors' && computerMove === 'Rock' ) {
    console.log(`Computer picked ${computerMove}. You picked ${playerMove}. You lose.`);
} else if (playerMove === 'Scissors' && computerMove === 'Paper' ) {
    console.log(`Computer picked ${computerMove}. You picked ${playerMove}. You win.`);
} else {
    console.log('Wrong input.');
} 
}

playRound('Rock', computerPick);