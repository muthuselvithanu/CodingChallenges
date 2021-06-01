/*
*****IntersectionArray*****
***Function to find intersection between 2 arrays***
**Test: node index.js interSectionArray --arr1=1 2 3 4 5 6 --arr2=4 5 6 7 8 9**
**output: 4 5 6**
*/
function interSectionArray(arr1,arr2)
{
  
  let newArr=[];
  for(let i=0;i<arr2.length;i++)
  {
if((arr1.includes(arr2[i])))
{
  newArr.push(arr2[i]);
}
  }

  console.log("Intersection of an array"+" "+newArr);
}
module.exports = {
    interSectionArray
  }