/*
*****Second small array element*****
***Function to find second smll array element***
**Test: node index.js secondSmallArrEle --arr1=45 78 96 83 21 47**
**output: 45**
*/
function secondSmallArrEle(nArr) {
    let temp;
    for (let i = 0; i < nArr.length; i++) {
        if (nArr[i] > nArr[i + 1]) {
            temp = nArr[i];
            nArr[i] = nArr[i + 1];
            nArr[i + 1] = temp;
            i = -1;
        }
    }
    console.log(nArr[1]);
}
module.exports = {
    secondSmallArrEle
}