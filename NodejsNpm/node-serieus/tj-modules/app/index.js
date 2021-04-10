const character = require('./character')

const player = "Hulk"

const description = character.showDescription(player)

console.log('The description of ' + player + ' is: ' + description);