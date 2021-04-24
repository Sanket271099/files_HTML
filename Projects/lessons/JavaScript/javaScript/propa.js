var inner=document.getElementById('box2');
inner.addEventListener('click',function(){
console.log("Inner div");
event.stopPropagation();
})
var countnum=document.getElementById('count');
var outer=document.getElementById('box1');
outer.addEventListener('click',function(){
console.log("outter div");
event.stopPropagation();
})
document.addEventListener('click',function(){
    console.log("DOcument");
})
var box=document.getElementById('box');
var count=0;
box.addEventListener('click',function(){
   
count++;
countnum.innerText=count+'';
})
inner.style