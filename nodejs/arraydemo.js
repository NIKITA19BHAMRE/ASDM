var m1=require("./arrayfunctionmodule");

var arr=new Array(12,34,10,45);
var arr1=[234,5,67,89];
console.log(arr.length);
console.log(arr1.length);
var sum=m1.add(arr);
var sum1=m1.add(arr1);

//var flag=false;
console.log("Sum :"+sum);
console.log("Sum of array1:"+sum1);
var pos=m1.search(arr,10);
arr1[pos]*12;
console.log("value found at :"+pos+" position");

