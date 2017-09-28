// var fs = require("fs");
var nodeArg = process.argv;
var numArray = [];
var sortNum = numArray.sort(function(a, b){return a-b});
// console.log(process.argv);

for( var i= 2; i<nodeArg.length-1;i++){
numArray.push(parseFloat(nodeArg[i]));
}
// numArray.sort(function(a, b){return a-b});
// console.log(numArray.sort);
console.log(numArray.sort(sortNum));
// console.log(process.argv);
//
// fs.writeFile("commandsort.txt",)
// var numbers =
// numbers.sort()
