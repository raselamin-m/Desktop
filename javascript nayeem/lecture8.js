/******************
 *lecture-8
 *functional javascript
 *Closure of function
*******************/
// var name='Rasel Amin';
// function sayName(){
//     console.log('Hello '+ name);
// }
// // console.dir(sayName);
// sayName();

function greeting(msg){
    return function(name){
        console.log(msg +' '+name);
    }
}
var hello=greeting('hello');
hello('Rasel');