// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscj-22-javascript-syntax-part-i/modules/wdcp-22-learn-javascript-syntax-conditionals-0e12e9e0-b36f-476e-b10c-afbc7cd6dbfe/projects/race-day

let raceNumber = Math.floor(Math.random() * 1000)

let registeredEarly = false

let runnerAge = 12

// check to see if over 18 and registered early for the event
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000
}

// check info and gives racce number and race time for there specific event
if (runnerAge > 18 && registeredEarly) {
  console.log(
    `Your race starts at 9:30am and your race number is ${raceNumber}`
  )
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(
    `Your race starts at 11:00am and your race number is ${raceNumber}`
  )
} else if (runnerAge < 18) {
  console.log(
    `Your race starts at 12:30am and your race number is ${raceNumber}`
  )
} else {
  console.log(`Please see the registration desk for more information.`)
}
