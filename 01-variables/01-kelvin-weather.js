// Variable for Kelvin temperature
const kelvin = 0

// temperature of Celsius is 273 less than kelvin
const celsius = kelvin - 273

// converting celcius to newton
const newton = Math.floor(celsius * (33 / 100))

// the calculation of fahrenheit - (Fahrenheit = Celsius * (9/5) + 32)
let fahrenheit = celsius * (9 / 5) + 32
// taking fahrenheit and Math.floor to round it down
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} degrees Newton.`)
