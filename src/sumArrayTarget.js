/*
*****sumArrayTarget*****
***Function to find sum of numbers that is equal to Targetsum in an array***
**Input: node index.js sumArrayTarget --arr1=4 5 2 3 7 6 1 --input1=9**
**output: [4,5],[2,7],[3,6]**
*/
function sumArrayTarget(arr, targetSum) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (sum === targetSum) {
                newArray.push(arr[i]);
                newArray.push(arr[j]);
                console.log(newArray);
                newArray.pop();
                newArray.pop();
            }
        }
    }
}
module.exports = {
    sumArrayTarget
}