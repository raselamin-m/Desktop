/******************
 *lecture-5
 *functional javascript
 *Higher order function
*******************/
var arr=[4,5,7,8,1];
arr.forEach(function(a){
    console.log(a);
});

function caller(){
    return function(name){
        return 'caller calling you '+ name;
    }
}
var x=caller();
var y=x('Rasel');
console.log(y);
var z=x('How are you');
console.log(z);