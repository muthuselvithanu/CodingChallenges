/*
*****spliotString*****
***Function to split string into array of words ***
**Input: node index.js splitString --input1="hi hello world are you doing good"  **
**output: [hi,hello,world,are,you,doing,good]**
*/
function splitString(str)
{
 let splitStr=str.split(" ");
console.log(splitStr);
}
module.exports={
    splitString
}