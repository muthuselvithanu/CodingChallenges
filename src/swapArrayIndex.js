/*
*****swapArrayIndex*****
***Function to swap array elements by given index***
**Input: node index.js swapArrayIndex --arr1=44 78 56 12 54 96 --input1=2 --input2=4**
**output: 44 78 54 12 56 96**
*/
function swapArrayIndex(arr,elepos1,elepos2)
{
  if(elepos1>0&&elepos2>0&&elepos1<arr.length&&elepos2<arr.length)
  {
[arr[elepos1],arr[elepos2]]=[arr[elepos2],arr[elepos1]];
console.log(arr);
}
else{
  console.log("undefined Position");
}
}
module.exports={
swapArrayIndex
}
