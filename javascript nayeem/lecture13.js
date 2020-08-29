/******************
 *lecture-13
 *functional javascript
 *reduce function
*******************/
var arr=[3,5,2,7,4,9,6];
// var sum=0;
// for(var i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// console.log('Sum='+sum);
var result=arr.reduce(function(a,b){
    return a+b;
});
console.log('Result='+result);