/*
*****DivideInteger*****
***Function to divide the number as long as result is integer***
**Test: node index.js divideInteger --input1=18 --input2=3**
**output: 2**
*/
function divideInteger(dividend, divisor) {
    if (divisor === 1) {
        console.log(dividend);
        return;
    }
    while (dividend % divisor === 0) {
        dividend = dividend / divisor;
    }
    console.log(dividend);
}
module.exports = {
    divideInteger
}