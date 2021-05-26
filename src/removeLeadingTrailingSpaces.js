/*
*****removeLeadingTrailingSpaces*****
***Function to remove leading and trailing spaces from given string ***
**Input: node index.js removeLeadingTrailingSpaces --input1="   hello world    " **
**output:hello world**
*/
function removeLeadingTrailingSpaces(str)
{
  
  if(str[0]==" ")
  {
    removeLeadingTrailingSpaces(str.substring(1,str.length));
    
  }
  else if(str[str.length]==" ")
  {
    removeLeadingTrailingSpaces(str.substring(0,str.length-1));
  }
  else
  {
    console.log(str);
  }
  
}
  module.exports=
 {
     removeLeadingTrailingSpaces
 }