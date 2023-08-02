// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscj-22-javascript-syntax-part-i/modules/wdcp-22-learn-javascript-syntax-scope-8fa87387-0f2a-418f-8ce0-68da888d9594/projects/training-days

// The scope of `random` is too loose

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight
const getTrainingDays = event => {
  let days
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight
const logEvent = (name, event) => {
  name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

let name

const logTime = (name, days) => {
  name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime


logEvent('Nala', event);
logTime('Nala', days);

const event2 = getRandEvent()
const days2 = getTrainingDays(event2)
const name2 = 'Warren'
logEvent(name2, event2)
logTime(name2, days2)
