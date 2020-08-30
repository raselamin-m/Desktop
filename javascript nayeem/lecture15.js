/******************
//  *lecture-15
//  *Object oriented javascript
//  * constructor pattern/class create
// *******************/

function person(name,age,email){
    this.name=name;
    this.age=age;
    this.email=email;
    this.print=function(){
        console.log('Name:'+ this.name);
    }
}
var p1=new person('Rasel Amin','21','rasel.amin@gmail.com');
var p2=new person('Rahim','23','Rahim2927@gmail.com');
var p3=new person('Hamim','22','Hamim4364@gmail.com');
// console.log(p1);
// console.log(p2);
// console.log(p3);
var people=[p1,p2,p3];
// console.log(people);
people.forEach(function(person){
    console.log('Email:'+person.email);
    person.print();
});
