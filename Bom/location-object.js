// Location object :
// href,protocol,hostname,port,pathname
var h1 =document.querySelector("h1");
var btn = document.querySelector("button");
btn.addEventListener("click",time)

function time(){
   alert(location.protocol);
}
