/******************
 *lecture-9
 *functional javascript
 *Sort array by function
*******************/
// var arr=[56,54,76,26,24,17,78,98,32,5,67];
// arr.sort(function(a,b){
//     return a-b;
// });
// console.log(arr);

var people=[
    {name:'Rasel',age:21},
    {name:'satus',age:23},
    {name:'fusa',age:19},
    {name:'Ifat',age:23},
    {name:'Ayat',age:18}
];
// people.sort(function(a,b){
//     return a.age-b.age;
// });

people.sort(function(a,b){
    if(a.name>b.name){
        return 1;
    }else if(a.name<b.name){
        return -1;
    }else{
        return 0;
    }

});
console.log(people);