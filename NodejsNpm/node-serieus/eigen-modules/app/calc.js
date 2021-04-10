// app/calc.js
/* je wilt de oneven getallen verdubbelen, maar de oneven negeren.
    Dat kan je met devolgde constructie:
*/
function doubleOddNumbers(numberList) {
    return numberList.filter(function(number) {
            return (number % 2 !== 0);
        }).map(function(number) {
            return number * 2;
    });
}
module.exports.doubleOddNumbers = doubleOddNumbers;