/******************
 *lecture-10
 *functional javascript
 *forEach function
*******************/
var arr=[1,2,3,5,6,8,4];
// arr.forEach(function(element,index,arr){
//     console.log('Element is='+element+' Index is='+index+' Array is='+arr);
// });
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
  
// }  console.log('Length='+arr.length);

function loop(arr,callback){
    for(var i=0;i<arr.length;i++){
        callback(arr[i],i);
    }
}
loop(arr,function(element,i){
    console.log('Element is='+element+' Index='+i);
});