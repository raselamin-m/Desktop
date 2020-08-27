/********************
*functional javascript
*first class function
*lecture-2
********************/

function sayName(name){
    return 'Hi,' + name;
}

//this lecture topic
//1. A function can be stored in a variable.
var hello = sayName;
var fun=sayName('Rasel');
console.log(hello);
console.log(fun);

//2. A function can be stored in an array.
var arr=[1,2,3,hello];
arr.push(sayName)
console.log(arr);


//3. A function can be stored as a object field or property.
var person={
    name:'Rasel',
    sayName:sayName
}
console.log(person);

//4. we can create function as needed.
var sum=10+(function(){return 60})();
console.log(sum);

//5. We can pass function as an arguments.
function wow(name,fun){
   return fun(name);
}
var result=wow('Rasel',sayName);
console.log(result);

//6. We can return function from another function.