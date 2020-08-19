//outer function and inner function
function add(a,b){
    function sum(){
        return a+b;
    }
    function sub(){
        return a-b;
    }
    function times(){
        return a*b;
    }
    function div(){
        return a/b;
    }
    return sum()+sub()+times()+div();
}
var result=add(10,10);
console.log(result);