var saveBtn =document.querySelector("#saveBtn");
var message =document.querySelector("#message");

window.addEventListener("load",clock);

function clock(){
   
   var date =new Date();
   var hours =date.getHours();
   var minutes =date.getMinutes();
   var seconds =date.getSeconds();
   if(seconds < 10){
      seconds = "0"+seconds;
   }
   var times =hours+":"+minutes+":"+seconds;
   message.innerHTML=times; 
   
   setInterval(clock,1000)
   
   
}
