// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-front-end-development/tracks/fscj-22-javascript-syntax-part-iii/modules/wdcp-22-learn-javascript-syntax-classes-8d95f6d1-ff64-43c3-8ff7-cdc933e16fde/projects/school-catalog

class School {
    constructor(name, level, numOfStudents) {
        this._name = name
        this._level = level
        this._numOfStudents = numOfStudents
    }
    // GETTERS
    get name() {
        return this._name
    }
    get level() {
        return this._level
    }
    get numOfStudents() {
        return this._numOfStudents
    }
    // SETTERS
    set numOfStudents(newNumberOfStudents) {
        if (typeof(newNumberOfStudents) === 'number') {
            return this._numOfStudents = newNumberOfStudents
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }
    // METHODS
    quickFacts() {
        console.log(`
        ${this._name} educates ${this._numOfStudents} students at the ${this._level} school level.
        `)
    }
    static pickSubstituteTeacher(substituteTeachers) {
        const randomNum = Math.floor(Math.random() * substituteTeachers.length)
        return substituteTeachers[randomNum]
    }
}

class PrimarySchool extends School {
    constructor(name, numOfStudents, pickUpPolicy) {
        super(name, 'primary', numOfStudents);
        this._pickUpPolicy = pickUpPolicy
    }
    // GETTERS
    get pickUpPolicy() {
        return this._pickUpPolicy
    }
}

class HighSchool extends School {
  constructor(name, numOfStudents, sportsTeam) {
    super(name, 'High School', numOfStudents)
      this._sportsTeam = sportsTeam
  }
  // GETTERS
  get sportsTeam() {
      return this._sportsTeam
  }
}


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts()
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(alSmith.sportsTeam)