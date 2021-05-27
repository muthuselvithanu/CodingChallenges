/*
*****DescendingArray*****
***Function to sort an array in descending order***
**Input: node index.js descendingArray --arr1=4 5 7 9 -6 3 2 78**
**output: 78 9 7 5 4 3 2 -6**
*/
function descendingArray(nArr) {
    let temp;
    for (let i = 0; i < nArr.length; i++) {
        if (nArr[i] < nArr[i + 1]) {
            temp = nArr[i];
            nArr[i] = nArr[i + 1];
            nArr[i + 1] = temp;
            i = -1;
        }
    }
    console.log("Array in descending order"+nArr);
}
module.exports={
    descendingArray
}