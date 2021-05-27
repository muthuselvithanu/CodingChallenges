
/*
*****fibonacci*****
***Function to find fibonacci series and print number in given position***
**Input: node index.js fibonacci --input1=6**
**output: 8**
*/

function fibonacci(num){
    console.log(fibo(num));
}
function fibo(num){
    if(num < 2) return num; 
    return fibo(num-1) + fibo(num-2);
}
module.exports = {
    fibonacci
}
