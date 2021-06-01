/*
*****sortStringAlphabetic*****
***Function to sort array of strings alphabetically ***
**Test: node index.js sortStringAlphabetic --arr1=hi hello world are you doing good  **
**output: are doing good hello hi world you**
*/
function sortStringAlphabetic(strArr)
{
  
  for(let i=0;i<strArr.length;i++)
  {
    for(let j=i+1;j<strArr.length;j++)
    {
      if(strArr[i].charAt(0).toLowerCase()>strArr[j].charAt(0).toLowerCase())
      {
        let temp=strArr[i];
        strArr[i]=strArr[j];
        strArr[j]=temp;
      }
     else if(strArr[i].charAt(0).toLowerCase()==strArr[j].charAt(0).toLowerCase())
      {
        if(strArr[i].charAt(1).toLowerCase()>strArr[j].charAt(1).toLowerCase())
        {
          let temp=strArr[i];
        strArr[i]=strArr[j];
        strArr[j]=temp;
        }
      }
    }
  }
  console.log("strings in ascending order"+" "+strArr);
}

module.exports={
    sortStringAlphabetic
}