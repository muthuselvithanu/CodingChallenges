const yargs = require('yargs');
yargs.array('arr1')
yargs.array('arr2')
const argv = yargs.argv; 
console.log(argv);
const arr1 = argv.arr1;
const arr2 = argv.arr2;
const input1 = argv.input1;
const input2 = argv.input2;
const fileName = argv._;
console.log(fileName);
let functionName = require(`./src/${fileName}`);
console.log(functionName);
let arg1 = (arr1 && arr2 || input1 && arr1) ? arr1  : input1 && input2 ? input1   : input1 ? input1 : arr1;
let arg2 = input1 && arr1 ? input1  : arr1 && arr2 ? arr2  : input2; 
let arg3 = input1 && arr1 ? input2 : undefined;
console.log('arguments',arg1,arg2,arg3)
if(arg1 && arg2){
  if(arg3){
    functionName[`${fileName}`](arg1, arg2, arg3);
  }else{
    functionName[`${fileName}`](arg1, arg2);
  }
} else {
  functionName[`${fileName}`](arg1);
}