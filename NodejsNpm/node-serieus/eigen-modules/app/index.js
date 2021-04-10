// app/index.js
const calc = require('./calc')

const numberList = [1, 2, 3, 4, 5, 6];
const newNumberList = calc.doubleOddNumbers(numberList)

console.log('The doubled numbers are', newNumberList);