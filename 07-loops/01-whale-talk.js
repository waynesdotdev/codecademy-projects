// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscp-22-javascript-syntax-part-ii-c8ddbace-1463-4797-ae12-503c7b0f9552/modules/wdcp-22-learn-javascript-syntax-loops-cb990154-3934-4e4d-b631-27a6e931b29b/projects/whale-talk

const input = '‘turpentine and turtles'
const vowels = ['a', 'e', 'i', 'o', 'u']
let resultArray = []

for (let i = 0; i < input.length; i++) {
  // console.log(input[i])
  for (let j = 0; j < vowels.length; j++) {
    // console.log(j)
    if (input[i] === vowels[j]) {
      // console.log(input[i])
      if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i])
      }
        resultArray.push(input[i])
    }
  }
}
console.log(resultArray)

const resultString = resultArray.join(' ').toUpperCase()
console.log(resultString)
