/*
*****Singledigitsum*****
***Function to find sum of digits in number until we get single digit sum***
**Test: node index.js singleDigitSum --input1=12456**
**output: 9**
*/
function singleDigitSum(num) {
    let count = 1;
    var sum1 = sepNum(num);
    while (sum1 > 9) {
        num = sum1;
        sum1 = sepNum(num);
        count++;
    }
    console.log(sum1);
}
function sepNum(num) {
    let sum = 0;
    while (num) {
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }
    return sum;
}
module.exports =
{
    singleDigitSum
}
