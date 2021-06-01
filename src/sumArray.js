/*
*****sumArray*****
***Function to find sum of numbers ikn an array***
**Test: node index.js sumArray --arr1=4 5 7 8 9**
**output: 33**
*/
function sumArray(nArr)
{
  let sum=0;
for(let i=0;i<nArr.length;i++)
{
  sum=sum+nArr[i];
}
console.log("sum of array is" + " " + sum);
}
module.exports={
    sumArray
}