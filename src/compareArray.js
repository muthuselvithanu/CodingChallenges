/*
*****Compare Array*****
***Compare 2 arrays then sort them in Ascending order***
**Input: node index.js compareArray --arr1=4 5 7 8 7 2 --arr2=6 8 1 3 9 5**
**Output: 4 5 7 8 2 6 1 3 9
          1 2 3 4 5 6 7 8 9**
*/
function compareArray(arr1, arr2) {
    let newArr = [];
    let temp = [];
    for (let i = 0; i < arr1.length; i++) {
        if (newArr.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (newArr.indexOf(arr2[i]) === -1) {
            newArr.push(arr2[i]);
        }
    }
    console.log(newArr);
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > newArr[i + 1]) {
            temp = newArr[i];
            newArr[i] = newArr[i + 1];
            newArr[i + 1] = temp;
            i = -1;
        }
    }
    console.log(newArr);
}
module.exports = {
    compareArray
}