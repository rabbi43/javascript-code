```
// JavaScript Document
/*
JavaScript document
document,write,getElementById,querySelector
for,var,let,const,add,style,
eventListener,classList,parentElement
children,nextElementSibling
previousElementSibling
querySelectorAll,getElementsByTagName
createElement,createTextNode,appendChild
removeChild,insertBefore,function
innerHTML,Math,sqrt,pow,random,floor,ceil
max,date new Date(),object,array,
date.get FullYear,Month,Hours,Minutes
Day,constractor,pop,push,shift,unshift
splice,slice,sort,href,protocol,hostname,port,pathname,break,continue,while,do
if,else if,else,switch,case,default,
Number,parseInt,prompt,parseFloat,toString()
toFixed,toPrecision,length,charAt,
toUpperCase,concat,addEventListener
background,color,this,textAlign,style,mouseover,mouseout
click,textContent,string,typeof,result,window,location,alert,setInterval,setTimeout
attribute*/
"use strict mode"

const br = ()=> document.write("<br>");
const text =()=>{
   var x ="bangladesh";
   var y =" is  a small country";
   document.write(`${x} ${y}`);
};
text();
// arrow function with map
const addition =(x=20,y=30,...z)=>{
   return z.map(({num1,num2})=>{return x+y+num1+num2;})
};
br()
document.write(addition(10,20,40,50));

br()
var array1 =[10,20,30,40];
var array2 =[50,60,70,80];
// Spread operator
var array =[...array1,...array2];
document.write(array);

br()
// object literals
const studentsInfo ={
   
   displayMsg : function(){
      document.write("hi there,");
   }
   
};
studentsInfo.displayMsg()
br()
function studentsInfo1(name,gpa){
   return {
      name : name,
      gpa : gpa,
   }
}
var data = studentsInfo1("rabbi",2.25);
document.write(data.name);
br()

{
   let numbers = {
      name : "rabbi ",
      age : 20,
      gpa : 4.67,
      
   };
   for(x in numbers){
      document.write(numbers[x]);
   }
   
}

// for each function
br()
{
   var nm =[12,32,92,22,82,72];
   document.write(nm);
   br()
   // var nmSub =[];
   var sub = nm.filter((x,index,arr)=>{
      return x>50;
   })
   for(i in sub){
      var total =sub[i]+100;
      document.write(total);
   }
   // document.write(sub[0]+sub[1]+sub[2]);
   
   
}
br()
// Array and Object destructuring
{
   let sd =[10,20,40]
   let [n1,n2,n3] = sd
   document.write(n1);
   br()
   let sd1 ={
      name : "pahchan",
      age : 20
   };
   // document.write(sd1.name);
   let {name,age} = sd1
   document.write(`Name = ${name}, Age = ${age}`);
}

// Array methods
br()
{
   var __data =[7,9,30,20,1];
   var x = __data.findIndex(y=>y%2===0);
   document.write(x);
}

// String methods
br()
{
   var txt ="today is april 12,2022";
   // check starts word or string
   var opt = txt.startsWith("today");
   document.write(opt);
   br()
   // check end word or string
   var opt = txt.endsWith("today");
   document.write(opt);
   br()
   // search the string in the array (exist or not!)
   var opt = txt.includes("today");
   document.write(opt);
}


// asynchronous
{
   const txt1 = ()=>{
      document.write("im text 1");
   };
   
   const data = ()=>{
       
      document.write("im text 2...Loading");
   }
   
   const txt2 = ()=>{
      setTimeout(data,1000);
   };
   
   const txt3 = ()=>{
      document.write("im text 3");
   };
   
   br()
   br()
   txt1()
   br()
   // txt2()// view output in console or dom!
   br()
   txt3()
}

// 

```
