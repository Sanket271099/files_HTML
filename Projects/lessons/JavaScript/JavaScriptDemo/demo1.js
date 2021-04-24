
// console.log("11"*"212");
// var a=0;
// if(a){
// console.log(true)
// }
// else{
//     console.log(false);
// }
// console.log(j);
//  var j=10; // this type of hoisting is called undefined
//  name();
//  function name(){
//      console.log("Hello everyone");
//  }
// function multiply(a, b) {
//     return a*b;
// };

// console.log(multiply(2,4));
// we can create objects on javascriot
// var student={
//     marks:22,
//     name:"sanket",
//     std:8

// };
// console.log(student.marks);
// student.sem=2;
// console.log(student.sem);
// var student=new Object(){
//     name="sanket",ROllNo=12
// };
// console.log(student.name);
// console.log(student.ROllNo);
// var obj={name:"Sanket", rollno:22,std:12,number:8698476604
// ,adress:{
//     pincode:223
// }  };
// // var obj2={name:"Sanket"};
// // console.log(obj===obj2);
// // for(var prop in obj){
// //     console.log(prop+":"+obj[prop]);
// // }
// console.log(obj.adress.pincode);
function hello(){
    console.log("HEllo Everyone");  
}
// setTimeout(hello,10000);
// setInterval(hello,1000);
var sec=10;
function time(){
console.group("after "+sec);
sec--;
if(sec==0){
    console.log("Time UP!");
    clearInterval(id);
}
}
var id=setInterval(time,1000);
