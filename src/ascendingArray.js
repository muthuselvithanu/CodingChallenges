/*
*****AscendingArray*****
***Function to sort an array in ascending order***
**Input: node index.js ascendingArray --arr1=4 5 7 9 -6 3 2 78**
**output: -6 2 3 4 5 7 9 78**
*/
function ascendingArray(nArr) {
     for (let i = 0; i < nArr.length; i++) {
        for (let j = i + 1; j <= nArr.length; j++) {
            if (nArr[i] > nArr[j]) {
                let temp = nArr[i];
                nArr[i] = nArr[j];
                nArr[j] = temp;
            }
        }
    }
    console.log("Ascending order of an array"+" "+nArr);
}
module.exports={
    ascendingArray
}