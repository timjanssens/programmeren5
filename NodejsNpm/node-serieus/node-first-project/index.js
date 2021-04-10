// we importeren het hele object
const camelCaseObject = require('camel-case') // Require left pad
// we hebben alleen de eigenlijke camelCase methode nodig
const camelCase = camelCaseObject.camelCase;
let output = camelCase("string") + '\n'; //=> "string"
output += camelCase("dot.case") + '\n'; //=> "dotCase"
output += camelCase("PascalCase") + '\n'; //=> "pascalCase"
output += camelCase("version 1.2.10") + '\n'; //=> "version_1_2_10"
console.log(output);