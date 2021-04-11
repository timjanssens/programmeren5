var Marvel = require('marvel')
 
var marvel = new Marvel({ publicKey: "cfc3e03eb8e709428113bbc27f142e67", privateKey: "3cbfc6bdaa7b0deeebf849a8f709adb82e8e8477"})

// function showDescription(character) {
//     marvel.characters
//       .name(character)
//       .get(function(err, resp) {
//         if (err) { console.log("Error: ", err) }
//         else { console.log(resp[0].description) }
//       })
// }
// module.exports.showDescription = showDescription;


function showDescription(character) {
  return marvel.characters
    .name(character)
    .get(function(err, resp) {
      if (err) { 
        return "Error: ", err;
       }
      else {
         return resp[0].description;
         }
    });
}
module.exports.showDescription = showDescription;