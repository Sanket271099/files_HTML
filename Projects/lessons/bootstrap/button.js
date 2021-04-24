	
  // function bts(){
  // 		alert("hello sanket")
  // }
 

	// var hello=document.getElementById("button2");
	// hello.addEventListener('click',bts);
	var outerdiv=document.getElementById("box");
	box.addEventListener('mouseover',function(){
		console.log('Mouse Over')
	});
	box.addEventListener('mouseout',function(){
		console.log('Mouse out')
	});
	var key=document.getElementById('search');
	key.addEventListener('keypress',function(event){
		console.log('key pressed',event.keyCode);
	});