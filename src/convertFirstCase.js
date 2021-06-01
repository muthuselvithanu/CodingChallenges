/*
*****Convert First Case *****
***Function to convert  first letter in string to uppercase***
**Test: node index.js convertFirstCase --input1="hello world" **
**Output: Hello World**
*/
function convertFirstCase(str)
{
  let resultStr="";
  let splitStr=str.split(" ");
    for(let i=0;i<splitStr.length;i++)
  {
    resultStr+=splitStr[i].charAt(0).toUpperCase()+splitStr[i].slice(1)+" ";
  }
  console.log(resultStr);
}
module.exports={
convertFirstCase
}