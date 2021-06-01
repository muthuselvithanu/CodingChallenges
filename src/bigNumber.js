/*
*****BigNumber*****
***Function to find biggest number in an array***
** Test: node index.js bigNumber --arr1=4 5 6 -8 7 12 3**
** Output: 12**
*/
function bigNumber(nArr)
{
  let num=[],big=0;
for(let i=0;i<nArr.length;i++)
{
  if(nArr[i]>big)
  {
    big=nArr[i];
  }
}
console.log("Big number in an array is" + " "+big);
}
module.exports = {
    bigNumber
  }
  