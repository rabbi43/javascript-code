// add multiple event listener:
for(i=0;i<3;i++){
   // document.write(i);
   var button =document.querySelectorAll("button")[i];
   // button.innerHTML="im changed";
   button.addEventListener("click",function(){
      // find body for adding css style:
      var body =document.querySelector("body");
      body.style.background="yellow";
      // body.classList.add("classname");
   });
}
