// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscj-22-javascript-syntax-part-i/modules/wdcp-22-learn-javascript-syntax-conditionals-0e12e9e0-b36f-476e-b10c-afbc7cd6dbfe/projects/magic-eight-ball-1

let username = 'Wayne'
username ? console.log(`Hello ${username}`) : console.log('Hello')
const userQuestion = 'What is with this world?'
console.log(`${username} asks: ${userQuestion}`)

const randomNumber = Math.floor(Math.random() * 7)
console.log(randomNumber, 'randomnumber')
let eightBall = ''

if (randomNumber === 0) {
  eightBall = 'It is certain'
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so'
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again'
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now'
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it'
} else if (randomNumber === 5) {
  eightBall = 'Outlook not so good'
} else if (randomNumber === 6) {
  eightBall = 'Signs point to yes'
}

console.log(eightBall)
