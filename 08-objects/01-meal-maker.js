// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscp-22-javascript-syntax-part-ii-c8ddbace-1463-4797-ae12-503c7b0f9552/modules/wdcp-22-learn-javascript-syntax-objects-42047fd1-bfb5-4b90-96a5-431acbee8013/projects/meal-maker

const menu = {
    _meal: '',
    _price: 0,

    set meal(mealToCheck) {
        if (typeof(mealToCheck) === 'string') {
            return this._meal = mealToCheck
        }
    },

    set price(priceToCheck) {
        if (typeof(priceToCheck === 'number')) {
            return this._price = priceToCheck
        }
    },
    get todaysSpecial() {
        if(this._meal && this._price) {
            return `Today's special is ${this._meal} and it's price is ${this._price}`
        } else {
            return `Meal or Price was not set correctly!`
        }

    }
}

menu.meal = 'Sea food'
menu.price = 19.99
console.log(menu.todaysSpecial)
