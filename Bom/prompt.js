function message(){
   var h1 =document.createElement("h1");
   
   
   var name = prompt("Enter your name:");
   if(name === null || name == ""){
      var text ="No name found";
      // document.write(text);
   }
   else{
      var text = "You are "+name;
      // document.write(text);
   }
   
   var text =document.createTextNode(text);
   h1.appendChild(text);
   document.body.appendChild(h1);
   
}


message();
