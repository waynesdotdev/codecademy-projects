// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscj-22-javascript-syntax-part-i/modules/wdcp-22-number-guesser-75517b97-cc5e-4579-a3ad-898b87826534/projects/number-guesser-independent-practice

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  const randomNumber = Math.floor(Math.random() * 10)
  console.log(randomNumber, 'Random Number')
  return randomNumber
}
// generateTarget()
function compareGuesses(human, computerGuess, targetGuess) {
  const humanDifference = Math.abs(targetGuess - human)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  if (humanDifference <= computerDifference) {
    return true
  } else {
    return false
  }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++
  } else if (winner === 'computer') {
    computerScore++
  }
}

const advanceRound = () => {
  currentRoundNumber++
}