/*
*****swapArray*****
***Function to swap first and last element in an array***
**Test: node index.js swapArray --arr1=44 78 56 12 54 96**
**output: 96 78 56 12 54 44**
*/
function swapArray(arr)
{
  [arr[0],arr[arr.length-1]]=[arr[arr.length-1],arr[0]];
  console.log(arr);
}
module.exports={
    swapArray
}