/*
*****Primenumber*****
***Function to find prime numbers ***
**Input: node index.js primeNumber --input1=20 **
**output: 1 2 3 5 7 11 13 17 19**
*/
function primeNumber(num) {
    for (let i = 1; i <= num; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
function isPrime(n) {
    if (n === 1) {
        return true;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
module.exports={
    primeNumber
}

