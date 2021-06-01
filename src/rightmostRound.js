/*
*****rightMostRoundNumber*****
***Function to find rightMostRoundnumber and its position in array of numbers ***
**Test: node index.js rightmostRound --arr1=4500 50 7800 12 56300 456 **
**output:Position of Rightmost round number is:4
         Rightmost Round number is 56300**
*/
function rightmostRound(arr) {
    let position = 0,rightmostNum;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 10 === 0) {
            position = i;
            rightmostNum=arr[i];
        }
    }
    console.log("position of right most round number is"+" "+position);
    console.log("Right most round number is"+" "+rightmostNum);
}
module.exports = {
    rightmostRound
}
