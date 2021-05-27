/*
*****Odd or even*****
***Function to find odd or even numbers***
***replace every 2nd even number with hello and print position*2 ***
***replace every 3rd odd number with hi and print position*2 ***
**Input: node index.js oddOrEven --input1=10**
**output: hello 4 16
          hi 5 25
          hello 8 64**
*/
function oddOrEven(n) {
  let count = 0, oddCount = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      count++;
      if (count == 2) {
        console.log("hello",i, i * i);
        count = 0;
      }
    }
    else {
      oddCount++;
      if (oddCount == 3) {
        console.log("hi", i,i * i);
        oddCount = 0;
      }
    }
  }
}
module.exports = {
  oddOrEven
}

