/*
*****reverseArray*****
***Function to reverse numbers in an array***
**Test: node index.js reverseArray --arr1=44 78 56 12 54 96**
**output: 96 54 12 56 78 44**
*/
function reverseArray(nArr)
{
  let nArr1=[];
  for(let i=nArr.length-1;i>=0;i--)
  {
    nArr1.push(nArr[i]);
  }
  console.log(nArr1);
}
module.exports=
{
    reverseArray
}