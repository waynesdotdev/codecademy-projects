// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscp-22-javascript-syntax-part-ii-c8ddbace-1463-4797-ae12-503c7b0f9552/modules/wdcp-22-learn-javascript-syntax-arrays-4f2cd573-461e-4396-a0c2-db2fca15f5b3/projects/secret-message

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop()
secretMessage.push('to', 'push')
secretMessage[7] = 'right'
secretMessage.shift()
secretMessage.unshift('Programming')
secretMessage.splice(6, 11, 'know')
console.log(secretMessage.join(' '))

console.log(secretMessage)
console.log(secretMessage.length)