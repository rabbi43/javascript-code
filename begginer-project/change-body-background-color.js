var colors = ["red","blue","green","pink","yellow","orange","deeppink","seagreen","lime","coral","indianred"];
var body = document.getElementsByTagName("body")[0];
var button = document.getElementById("btn");

button.addEventListener("click",changeBg);


function changeBg(){
   //const colorIndex= parseInt(Math.random()*colors.length)
   var colorIndex =parseInt(Math.random()*colors.length);
   body.style.background=colors[colorIndex];
}

