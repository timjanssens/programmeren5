var Marvel = require('marvel')
 
var marvel = new Marvel({ publicKey: "cfc3e03eb8e709428113bbc27f142e67", privateKey: "3cbfc6bdaa7b0deeebf849a8f709adb82e8e8477"})
 
//show the description of the character
marvel.characters
  .name("Hulk")
  .get(function(err, resp) {
    if (err) { console.log("Error: ", err) }
    else { console.log(resp[0].description) }
  })

// more info about the npm can be found at:
// https://www.npmjs.com/package/marvel