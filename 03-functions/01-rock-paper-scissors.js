// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscj-22-javascript-syntax-part-i/modules/wdcp-22-learn-javascript-syntax-functions-a8d515f4-706a-456f-8ac6-334e9d1fb2f8/projects/rock-paper-scissors-javascript

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()

  // checking valid choice
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
  } else if (userInput === 'bomb') {
    return userInput
  } else {
    console.log('Please choose from: Rock, Paper or Scissors')
  }
}

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  const randomNumber = Math.floor(Math.random() * choices.length)
  return choices[randomNumber]
}

const determineWinner = (userChoice, computerChoice) => {
  console.log(`userchoice is ${userChoice} and computerChoice is ${computerChoice}`)

  // determine the winner
  if (userChoice === computerChoice) {
    return `It's a DRAW, Have another go and see if you can win next time!`
  } else if (
      userChoice === 'rock' && computerChoice === 'scissors' ||
      userChoice === 'paper' && computerChoice === 'rock' ||
      userChoice === 'scissors' && computerChoice === 'paper' ||
      userChoice === 'bomb'
  ) {
    return `User Wins with ${userChoice}, well done you beat the computer`
  } else {
    return `Computer Wins with ${computerChoice}, Bad luck this time, but you never know for the next time, give it a shot.`
  }
}

function playGame() {
  const userChoice = getUserChoice('bomb')
  const computerChoice = getComputerChoice()
  console.log(userChoice, 'userChoice')
  console.log(computerChoice, 'computerChoice')
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()



