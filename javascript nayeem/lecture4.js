/******************
 *lecture-4
 *functional javascript
 *Return statement
*******************/
var output;
function name(firstName,lastName,gendar){
    if(gendar==='male'){
        output='Mr. '+firstName + ' ' + lastName;
       
    }else if(gendar==='female'){
        output='Mrs. '+firstName + ' ' + lastName;
    }
     return output;//this is return from function
}
var fullname=name('Rasel','Amin','male');
console.log(fullname);