// Define array
const hands = ['rock', 'paper', 'scissors'];

// Define getHand()
function getHand() {
    // Return a hand from array
    return hands[parseInt(Math.random() * 10) % 3];
    }

// Define two player objects
const playerOne = {
     name: "",
     hand: getHand
}
const playerTwo = {
    name: "", //Removed names because we're going to replace them later in the tournament arguments
    hand: getHand
}

// Define playRound function
function playRound(playerOne, playerTwo) {
    // Get hands
    const p1Hand = playerOne.hand(); // Adjusted getting hands as per Brandon Wall's grading
    const p2Hand = playerTwo.hand();
    // Rewritten playRound to be more efficient and dynamic
    if (p1Hand === p2Hand) {
        console.log(`It's a tie! Both players chose ${p1Hand}`);
        return null;
    } else if ((p1Hand === 'rock' && p2Hand === 'scissors') ||
               (p1Hand === 'paper' && p2Hand === 'rock') ||
               (p1Hand === 'scissors' && p2Hand === 'paper')) {
        console.log(`${playerOne.name} wins with ${p1Hand} against ${p2Hand}`);
        return playerOne;
    } else if ((p2Hand === 'rock' && p1Hand === 'scissors') ||
                (p2Hand === 'paper' && p1Hand === 'rock') ||
                (p2Hand === 'scissors' && p1Hand === 'paper')) {
        console.log(`${playerTwo.name} wins with ${p2Hand} against ${p1Hand}`);
        return playerTwo;
    }
    else{
        console.log(`Critical Error! Something really went wrong!`) //Final error checking in case something crazy happens
        return undefined;
    }
}

function playGame(player1, player2, playUntil){
    // Initialize player wins
    player1wins = 0;
    player2wins = 0;
    // Play rounds in a loop till wins === playUntil
    while (player1wins != playUntil || player2wins != playUntil)
        {
            if(playRound(player1, player2) == playerOne){
                player1wins++;
                if (player1wins == playUntil){
                    return player1
                }
            }
            else if(playRound(player1, player2) == playerTwo){
                player2wins++;
                if (player2wins == playUntil){
                    return player2
                }
            }
        }
}

function playTournament(players, playUntil) {
    // Set names and play games for the first two players
    playerOne.name = players[0];
    playerTwo.name = players[1];
    let game1Winner = playGame(playerOne, playerTwo, playUntil);
    
    // Set names and play games for the second two players
    playerOne.name = players[2];
    playerTwo.name = players[3];
    let game2Winner = playGame(playerOne, playerTwo, playUntil);
    
    // Play the final game between the winners of the previous games
    playerOne.name = game1Winner.name;
    playerTwo.name = game2Winner.name;
    let grandChamp = playGame(game1Winner, game2Winner, playUntil);

    console.log(`${grandChamp.name} is the world champion!`);
}

playTournament(["Mike", "Justus", "Easton", "Dewey"], 3);