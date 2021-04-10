let numberList = [1, 2, 3, 4, 5, 6];
let newNumberList = numberList.filter(function(number) {
    return (number % 2 !== 0);
}).map(function(number) {
    return number * 2;
});
console.log("The doubled odd numbers are", newNumberList);