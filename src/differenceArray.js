/*
*****DifferenceArray*****
***Function to find difference between 2 arrays***
**Test: node index.js differenceArray --arr1=1 2 3 4 5 6 --arr2=4 5 6 7 8 9**
**output: 1 2 3 7 8 9**
*/
function differenceArray(arr1, arr2) {
    let newArr = [];
    let temp = arr1;
    for (let i = 0; i < arr2.length; i++) {
        var index = temp.indexOf(arr2[i]);
        if (index !== -1) {
            temp.splice(index, 1);
        }
        else {
            temp.push(arr2[i]);
        }
    }
    console.log(temp);
}
module.exports = {
    differenceArray
}