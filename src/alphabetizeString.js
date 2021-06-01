/*
*****Alphabetize String*****
***Function to sort a string in alphabetical order***
**Test: node index.js alphabetizeString --input1=alphabetize**
**Output: aabeehilptz**
*/
function alphabetizeString(str) {
    let splitStr = str.split('');
    for (let i = 0; i < splitStr.length; i++) {
        for (let j = i + 1; j <= splitStr.length; j++) {
            if (splitStr[i] > splitStr[j]) {
                let temp = splitStr[i];
                splitStr[i] = splitStr[j];
                splitStr[j] = temp;
            }
        }
    }
    console.log("String in alphabetical order:"+ " "+splitStr.join(''));
}
module.exports = {
    alphabetizeString
}