// /******************
//  *lecture-14
//  *Object oriented javascript
//  * Basic object
// *******************/
// var obj={};
// var obj1=new Object;
// console.log(obj);
// console.log(obj1);
var book={
    name:'javascript',
    auther:'Rasel',
    publisher:'sapla',
    page:250,

    print:function(){
        console.log(this.name,this.auther);
    }
}
// console.log(book);
// book.print();
// console.log('Book name:'+book.name);//dot notation
// console.log('Author name:'+book['auther']);//braket notation
// book.publishYear=2020;
// console.log('Publish year:'+book.publishYear);
// book['price']='30 dolar';
// console.log('price:'+book.price);
for(var props in book){
    // console.log(props);
    console.log(props +'='+ book[props]);
}