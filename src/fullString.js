/*
*****fullString*****
***Function to print the array of strings without NULL values ***
**Input: node index.js fullString --arr1=null hi false 0 hello Nan world undefined **
**output: hi,hello,world**
*/
function fullString(arrString)
{
let newStr=[];
for(let i=0;i<arrString.length;i++)
{
if((arrString[i]!="null")&&(arrString[i]!="0")&&(arrString[i]!="Nan")&&(arrString[i]!="undefined")&&(arrString[i]!="false")&&(arrString[i]!=""))
{
  newStr.push(arrString[i]);
 }
}
console.log(newStr);
}
module.exports={
    fullString
}