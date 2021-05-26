/*
*****sortString*****
***Function to sort array of strings based on length ***
**Input: node index.js sortString --arr1=hi hello world are you doing good  **
**output: hi are you good hello world doing**
*/
function sortString(arr)
{
for(i=0;i<arr.length-1;i++)
{
  if(arr[i].length>arr[i+1].length)
    {
      temp=arr[i];
      arr[i]=arr[i+1];
      arr[i+1]=temp;
      i=-1;
    }
  }
console.log(arr);
}
module.exports={
    sortString
}