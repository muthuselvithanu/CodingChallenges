
/*
*****factorial*****
***Function to find the factorial of an number***
**Test: node index.js factorial --input1=6**
**output: 720**
*/
function factorial(n){
    console.log(fact(n));
}
function fact(n){
    if(n <=1) return n;
    return n * fact(n-1);
}

module.exports = {
    factorial
}

