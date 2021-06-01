/*
*****swapArrayHalf*****
***Function to swap firsthalf with second half in an array***
**Test: node index.js swapArrayHalf --arr1=44 78 56 12 54 96**
**output: 12 54 96 44 78 56**
*/
function swapArrayHalf(arr)
{
if(arr.length%2!==0)
{
  console.log("Array Length is not even");
  return;
}
else
{
  for(i=0;i<arr.length/2;i++)
  {
    temp=arr[i];
    arr[i]=arr[arr.length/2+i];
    arr[arr.length/2+i]=temp;
  }
}
 console.log(arr);
}
module.exports={
    swapArrayHalf
}