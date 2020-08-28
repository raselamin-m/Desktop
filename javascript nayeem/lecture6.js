// /******************
//  *lecture-6
//  *functional javascript
//  *callback function
// *******************/
// function hello(name,print){
//     print(name);
//     // print('rasel amin');
// }
// // function print(args){
// //     console.log(args);
// // }
// // hello('twinkle cats');

// hello('Rasel Amin',function(age){
//     console.log('Hello '+ age);
// });

// hello('Rasel Amin',function(len){
//     console.log('lenght of '+ len +' is '+len.length);
// });

function print(data,cbf1,cbf2){
    console.log('Original data: '+ data);
    cbf1(data);
    cbf2(data);
}
print('Visual studio code is Awesome',function(data){
    var data=data.toUpperCase();
    console.log('Uppercase: '+data);
},function(data){
    var data=data.toLowerCase();
    console.log('Lowercase: '+data);
    console.log('Length: '+ data.length);
});
