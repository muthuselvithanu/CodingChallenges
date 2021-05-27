/*
*****DuplicateArray*****
***Function to find duplicate numbers in an array***
**Input: node index.js duplicateArray --arr1=4 7 8 5 1 4 8 2 3 5**
**output: 4 8 5**
*/
function duplicateArray(nArr) {
    let temp = [];
    let nArrd = [];
    for (let i = 0; i < nArr.length; i++) {
        if (temp.indexOf(nArr[i]) === -1) {
            temp.push(nArr[i]);
        }
        else {
            if (nArrd.indexOf(nArr[i]) === -1) {
                nArrd.push(nArr[i]);

            }

        }
    }
    console.log("Duplicate elements in an array"+" "+nArrd);
}
module.exports =
{
    duplicateArray
}