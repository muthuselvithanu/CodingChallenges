/*
*****longString*****
***Function to find Longest String in an array ***
**Test: node index.js longString --arr1=hi hello world are you doing good  **
**output: hello,world,doing**
*/
function longString(arr) {
    let big = 0, longstr=[];
    for (let i = 0; i < arr.length; i++) {
      let str = arr[i];
      if (str.length > big) {
        big = str.length;
        longstr=[];
        longstr.push(str);
          }
          else if(str.length==big)
          {
            longstr.push(str);
          }
        console.log(str+"-"+str.length);
        }
        console.log("longest string in an array"+" "+longstr);
        }
       
    module.exports = {
    longString
  }
