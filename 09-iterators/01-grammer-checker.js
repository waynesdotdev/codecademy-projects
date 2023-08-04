// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscp-22-javascript-syntax-part-ii-c8ddbace-1463-4797-ae12-503c7b0f9552/modules/wdcp-22-learn-javascript-syntax-iterators-747d086e-c062-442b-9236-1515dece1cf3/projects/mini-linter

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0
storyWords.forEach(word => {
    count++
})
storyWords = storyWords.filter(word => word !== unnecessaryWord)
storyWords = storyWords.map(word => {
    if (word === misspelledWord) {
        return 'beautiful'
    } else {
        return word
    }
})

const badWordIndex = storyWords.findIndex(word => word === badWord)
storyWords[badWordIndex] = 'really'
const lengthCheck = storyWords.every(word => word <= 10)
const findLongWord = storyWords.map(word => {
    if (word === lengthCheck) {
        return 'sure'
    } else {
        return word
    }
})




console.log(storyWords.length)
console.log(storyWords.join(' '))