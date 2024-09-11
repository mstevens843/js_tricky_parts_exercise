function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100); 
    let guesses = 0;
    let gameOver = false; 

    return function guess(number) {
        if (gameOver) {
            return "The game is over, you already won!";
        }

        guesses++; 

        if (number === secretNumber) {
            gameOver = true;
            return `You win! You found ${number} in ${guesses} guesses.`;
        } else if (number < secretNumber) {
            return `${number} is too low!`;
        } else {
            return `${number} is too high!`; 
        }
    };

}

module.exports = { guessingGame };


// Explanation
// secretNumber is generated using Math.random and is a whole number between 0 and 99. 
// the guesses variable tracks num guess made by player.
// gameOver flag ensures that when gae over and player wins, they cannot keep guessing. 
// returned function checks if game is over and responds with appropriate message based on player's guess. 



