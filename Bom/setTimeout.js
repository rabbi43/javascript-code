var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
btn.addEventListener("click",save);
     
function save(){
   h1.innerHTML = "User registration successful";
   
   setTimeout(()=>{
      h1.innerHTML="";
   },2000);
}
