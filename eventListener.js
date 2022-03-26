for(i=0;i<3;i++){
   
document.querySelectorAll(".myBtn")[i].addEventListener("click",function (){
   var text = this.innerHTML;
   var heading = document.querySelector("h1");
   heading.innerHTML = text + " is clicked";
})


 }
