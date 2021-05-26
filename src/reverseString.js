/*
*****reverseString*****
***Function to reverse into number of words if separator is given***
***if separator is not given reverse string by characters***
**Input: node index.js reverseString --input1="hi hello world" --input2=" "
         node index.js reverseString --input1="hi hello world"**
**output: world hello hi
          dlrow olleh ih **
*/
function reverseString(str,sep)
{
   if(sep)
  {
    console.log(str.split(sep).reverse().join(sep));
  }
else{
  console.log(str.split('').reverse().join(''));
}

}
 module.exports={
    reverseString
}
