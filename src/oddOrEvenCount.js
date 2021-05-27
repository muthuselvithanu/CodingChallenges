/*
*****Odd or even Count*****
***Function to find number of odd or even numbers***
**Input: node index.js oddOrEvenCount --input1=10**
**output:Total even numbers 5 2 4 6 8 10
         Total odd numbers 5 1 3 5 7 9**
*/
function oddOrEvenCount(n) {
    let count = [], oddCount = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            count.push(i);
        }
        else {
            oddCount.push(i);
        }
    }
    console.log("Total Even numbers" + " " + count.length + " " + count);
    console.log("total odd numbers" + " " + oddCount.length + " " + oddCount);
}
module.exports = {
    oddOrEvenCount
}
