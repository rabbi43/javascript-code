// Method1 :
var btn =document.querySelector("button");
btn.addEventListener("click",function(){
   alert("Hello im alert!");
});

// Method2 :
btn.onclick =function(){
  alert("Hey! im JavaScript alert!"); 
};
