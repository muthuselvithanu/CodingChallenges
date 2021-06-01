/*
*****UnionArray*****
***Function to find union between 2 arrays***
**Test: node index.js unionArray --arr1=1 2 3 4 5 6 --arr2=4 5 6 7 8 9**
**output: 1 2 3 4 5 6 7 8 9**
*/
function unionArray(arr1,arr2)
{
let newArr=[];
newArr=arr1;
  for(let i=0;i<arr2.length;i++)
  {
if(!(newArr.includes(arr2[i])))
{
  newArr.push(arr2[i]);
}
  }

  console.log("Union of an array"+" "+newArr);
}
module.exports = {
    unionArray
}
