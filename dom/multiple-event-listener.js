// add multiple event listener:
for(i=0;i<3;i++){
   // document.write(i);
   var button =document.querySelectorAll("button")[i];
   // button.innerHTML="im changed";
   button.addEventListener("click",function(){
      alert("Hey! it's working...");
   });
}

