
/*
*****fibonacciSeries*****
***Function to find fibonacci series ***
**Input: node index.js fibonacciSeries --input1=6**
**output: 0,1,1,2,3,5 **
*/
function fibonacciSeries(num)
{
  let fibo=[];
  fibo[0]=0;
  fibo[1]=1;
  for(let i=2;i<num;i++)
  {
    fibo[i]=fibo[i-1]+fibo[i-2];

  }
console.log(fibo);
}
module.exports={
    fibonacciSeries
}

