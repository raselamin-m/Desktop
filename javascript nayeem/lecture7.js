/******************
 *lecture-7
 *functional javascript
 *Return function from another function
*******************/
function greeting(msg){
    function ret(name){
        console.log(msg+' '+name);
    }
    return ret;
    
}
var lol=greeting('Good morning');
var hello=greeting('Hello');
hello('Rasel');
lol('Amin');