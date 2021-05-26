/*
*****Count Substring *****
***Function to count substring in a given string***
**Input: node index.js countSubString --input1="Bretty bought some bitter butter that made her batter bitter" --input2=ter **
**Output: 4**
*/
function countSubString(str, substr) {
    let count = 0;
    let splitStr = str.split(" ");
    for (let i = 0; i < splitStr.length; i++) {
        if(splitStr[i].indexOf(substr)!==-1)
    {
    count++;
  }
}
    console.log(count);
}
module.exports = {
    countSubString
}