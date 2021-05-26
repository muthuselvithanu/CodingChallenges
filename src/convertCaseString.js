/*
*****Convert Case String*****
***Function to convert case of a string***
**Input: node index.js convertCaseString --input1="Hello World" **
**Output: hELLO wORLD**
*/
function convertCaseString(str) {
    let resultStr = "";
    for (let i = 0; i < str.length; i++) {
        charStr = str.charAt(i);
        resultStr += charStr === charStr.toUpperCase() ? charStr.toLowerCase() : charStr.toUpperCase();
    }
    console.log(resultStr);
}
module.exports={
    convertCaseString
}