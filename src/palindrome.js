/*
*****palindrome*****
***Function to find given string is Palindrome or not ***
**Input: node index.js palindrome --input1=madam **
**output: Madam is Palindrome**
*/
function palindrome(str)
{
  let str1="";
  for(let i=str.length-1;i>=0;i--)
  {
    str1+=str[i];
  }
  if(str===str1)
  {
    console.log(str+" is Palindrome");
  }
  else
  {
    console.log(str+" is not Palindrome");
  }
}
module.exports={
    palindrome
}