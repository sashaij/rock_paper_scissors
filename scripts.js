const getComputerChoice = function () {
    //generate random number
    let randomNumber = ((Math.random()) * 10).toFixed(2);
    console.log(randomNumber);
    //attach all three moves to a certain value
    if (randomNumber > 0 && randomNumber <= 3.33) {
        console.log('Rock');
    } else if (randomNumber > 3.33 && randomNumber <= 6.66) {
        console.log('Paper');
    } else {
        console.log('Scissors');
    }
    //display the value
}
   //win-loss function
const playRound = function (playerMove) {
    if (playerMove === getComputerChoice) {
        console.log('its a tie');
}
}
getComputerChoice();


