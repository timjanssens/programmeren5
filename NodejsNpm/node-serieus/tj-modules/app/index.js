// const character = require('./character')

// const player = "Hulk"

// const description = character.showDescription(player)

// console.log('The description of ' + player + ' is: ' , description);

const character = require('./character')

const player = "Hulk"

character.getDescription(player).
    then(function (value) { console.log(value) },
        function (value) { console.log(value) });