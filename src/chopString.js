/*
*****Chop String*****
***Function to Chop String based on choplength***
**Input: node index.js chopString --input1="Hello World" --input2=3**
**Output: Hel
          lo
          Wor
          ld**
*/
function chopString(str, choplength) {
    let resultStr = "";
    if (choplength < 0 || choplength > str.length) {
        console.log(" we cannot chop the string");
    }
    else {
        if (choplength == 0) {
            return str;
        }
        for (let i = 0; i < str.length; i += choplength) {
            let j = i;
            while (j < i + choplength) {
                resultStr += str.charAt(j);
                j++;
            }
            console.log(resultStr);
            resultStr = "";
        }

    }
}
module.exports = {
    chopString
}