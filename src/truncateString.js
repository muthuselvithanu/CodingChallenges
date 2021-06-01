/*
*****truncateString*****
***Function to truncate string into number of words based on given length***
**Test: node index.js truncateString --input1="hi hello world" --input2=2**
**output: hi hello**
*/
function truncateString(str, length) {
    let resultStr = "";
    let splitStr = str.split(' ');
    console.log(splitStr);
    if (length > splitStr.length) {
        console.log("length is greater than given string length")
    }
    else {
        if (length == 0) {
            return str;
        }
        for (let i = 0; i < length; i++) {
            resultStr += splitStr[i];
        }
    }
    console.log(resultStr);
}
module.exports = {
    truncateString
}