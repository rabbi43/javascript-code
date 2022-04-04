var btn = document.querySelector("button");
btn.addEventListener("click",time)
var h1 =document.querySelector("h1");

function time(){
   var date = new Date();
   var x = date.getSeconds();
   // document.write(x);
   
   h1.innerHTML = x;
   
   setInterval(time,1000)
   
}

