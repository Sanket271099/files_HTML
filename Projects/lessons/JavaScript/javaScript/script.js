



var button4=document.getElementById('button4');
function sayHello(){
	alert('hello everyone piyush and sanket')
}


var div2=document.getElementById('div2');
div2.style.textAlign="center";

	console.log("hello");
	var btn1=document.getElementById('btn1');
	btn1.addEventListener('click',sayHello);
	var btn2=document.getElementById('btn2');
	// btn2.addEventListener('click',sanket);
	function sanket(){
alert("hi sanket charbhe");
	}
	var counter= (function(){
		var count=0
		return function (){
return count+=1;
		}
	})();

	function hello(){
		document.getElementById('btn2').innerHTML=counter();
	}
