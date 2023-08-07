// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-front-end-development/tracks/fscj-22-javascript-syntax-part-iii/modules/wdcp-22-learn-javascript-syntax-classes-8d95f6d1-ff64-43c3-8ff7-cdc933e16fde/projects/build-a-library

class Media {
    constructor(title) {
        this._title = title
        this._isCheckedOut = false
        this._ratings = []
    }
    // GETTERS
    get title() {
        return this._title
    }
    get isCheckedOut() {
        return this._isCheckedOut
    }
    get rating() {
        return this._ratings
    }
    // METHODS
    toggleCheckOutStatus() {
        return this._isCheckedOut = !this._isCheckedOut
    }
    getAverageRating() {
        // this will need testing
        const sumArray = this._ratings.reduce((acc, cur) => acc + cur)
        return sumArray / this._ratings.length
    }
    addRating(newRating) {
        this._ratings.push(newRating)
    }
    // SETTERS
    set isCheckedOut(checkedOut) {
        if (typeof(checkedOut) === 'boolean') {
            return this._isCheckedOut = checkedOut
        }
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author
        this._pages = pages
    }
    // GETTERS
    get author() {
        return this._author
    }
    get pages() {
        return this._pages
    }
}

class Movie extends Media {
    constructor(director, title, runtime) {
        super(title);
        this._director = director
        this._runtime = runtime
    }
    // GETTERS
    get director () {
        return this_.director
    }
    get runtime () {
        return this._runtime
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.rating)
console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())