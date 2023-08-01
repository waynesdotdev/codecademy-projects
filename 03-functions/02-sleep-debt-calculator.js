// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscj-22-javascript-syntax-part-i/modules/wdcp-22-learn-javascript-syntax-functions-a8d515f4-706a-456f-8ac6-334e9d1fb2f8/projects/sleep-debt-calculator

function getSleepHours(day) {
    day = day.toLowerCase()
    switch (day) {
        case 'monday':
            return 8
        case 'tuesday':
            return 2
        case 'wednesday':
            return 5
        case 'thursday':
            return 9
        case 'friday':
            return 1
        case 'saturday':
            return 11
        case 'sunday':
            return 3
        default:
            console.log('Choose between Monday, Thusday, Wednesday, Thursday, Friday, Saturday or Sunday')
    }
}

const getActualSleepHours = () => {
    const hoursSlept =
        getSleepHours('Monday') +
        getSleepHours('tuesday') +
        getSleepHours('WedneSday') +
        getSleepHours('ThursDaY') +
        getSleepHours('friDay') +
        getSleepHours('SatURdaY') +
        getSleepHours('Sunday')

        console.log(hoursSlept, 'hoursSlept') // 39 hours
    return hoursSlept
}

function getIdealSleepHours() {
    const idealHours = 8
    return idealHours * 7 // 56 hours
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()

    if (actualSleepHours === idealSleepHours) {
        console.log(`Wahoo, you got the perfect amount of sleep, well done`)
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`That's unfortunate you are owed ${idealSleepHours - actualSleepHours} hours of sleep.`)
    } else if(actualSleepHours > idealSleepHours) {
        console.log(`You lucky duck, you got an extra ${actualSleepHours - idealSleepHours} hours sleep.`)
    }
}

calculateSleepDebt()