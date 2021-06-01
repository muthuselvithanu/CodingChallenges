/*
*****sumArrayIndex*****
***Function to find sum of numbers in an array based on its index***
**Test: node index.js sumArrayIndex --arr1=4 5 2 3 1 --arr2=3 2 5 6**
**output: 7 7 7 9 1**
*/
function sumArrayIndex(arr1, arr2) {
    let leng1 = arr1.length;
    let leng2 = arr2.length;
    let newsumArray = [];
    if ((leng1 && leng2) === 0) {
        console.log("empty array")
    }
    let i = 0;
    while (i < leng1 && i < leng2) {
        newsumArray.push(arr1[i] + arr2[i]);
        i++;
    }
    if (i == leng1) {
        for (let j = i; j < leng2; j++) {
            newsumArray.push(arr2[j]);
        }
    }
    else {
        for (let j = i; j < leng1; j++) {
            newsumArray.push(arr1[j]);
        }
    }
    console.log(newsumArray);
}
module.exports = {
    sumArrayIndex
}