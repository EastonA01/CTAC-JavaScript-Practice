// Define array
const hands = ['rock', 'paper', 'scissors'];

// Define getHand()
function getHand(){
    // Return a hand from array
    let hand = hands[parseInt(Math.random()*10)%3];
    return hand;
}

// Define two player objects
const playerOne = {
     name: "Player 1",
     hand: getHand()
}
const playerTwo = {
    name: "Player 2",
    hand: getHand()
}

// Define playRound function
function playRound(playerOne, playerTwo){
    // Get hand from each player
    p1Hand = playerOne.hand;
    p2Hand = playerTwo.hand;
    // Determine the winner
    if ((p1Hand == 'rock' && p2Hand == 'scissors') || (p1Hand == 'paper' && p2Hand == 'rock') //p1 win conditions
    || (p1Hand == 'scissors' && p2Hand == 'paper')){
            console.log(`P1 hand was ${p1Hand}`);
            console.log(`P2 hand was ${p2Hand}`);
            console.log(`WINNER IS: ${playerOne.name}`);
            return playerOne;
    }
    else if ((p2Hand == 'rock' && p1Hand == 'scissors') || (p2Hand == 'paper' && p1Hand == 'rock') //p2 win conditions
    || (p2Hand == 'scissors' && p1Hand == 'paper')){
            console.log(`P1 hand was ${p1Hand}`);
            console.log(`P2 hand was ${p2Hand}`);
            console.log(`WINNER IS: ${playerTwo.name}`);
            return playerTwo;
    }
    else if (p1Hand == p2Hand){
        console.log(`P1 hand was ${p1Hand}`);
        console.log(`P2 hand was ${p2Hand}`);
        console.log(`it's a tie`);
        return null;
    }
    else{
        console.log("CRITICAL ERROR! Something went wrong!");
        return undefined;
    }
    
}

// Commented out function that will run a game if .js file is ran.
// playRound(playerOne,playerTwo);