"use strict"
console.clear();
//Object literals

//object inside function
function Text(name,age){
  return {
   name,
   age,
  }
}
console.log(Text(`sakib`,20));


//function inside object
let s1 ={
  name : "sakib",
  age : 30,
  gpa : 4.25,

  display(){
	console.log(`im function inside an object...`);
  }

};
//console.log(s1);
s1.display();

console.log("==================");

{
let info =[10,20,30];
info.forEach(function(x,index,arr){
  arr[index]=x+1;
 });
console.log(info);
}

console.log("==================");

//for of and for in loop
{
let numbers =[7,9,2,2,8,1,9,2,3];
for(let i of numbers){
  console.log(i);
 }
}


//Spread operator
{
function multi(x,y,z){
 return x*y*z; 
 }
let numbers =[10,20,30,40];
console.log(multi(...numbers));
}

const info =["sakib","alamin","pahchan"];
const info0 =["rabbi"];
console.log(...info,...info0);



//Default and rest parameter
{
 function sum(x,y,...z){
  //return x+y;
  console.log(z[0]);
  //return text;
 }
var value =sum(1,4,10,20,30,40);
console.log(value);
}



//Hoisting
host = `This is example of hoisting`;
console.log(host);
var host;


let x = 10;
let y = 20;
let sum = x+y;
console.log(`SUM = ${sum}`);
{
let x = [10,20];
//let x.push(100);
console.log(x);
}

{
let x = 50;
console.log(x);
for(let x=0;x<=10;x++){
  //console.log("hello");
 }
}


let addition = 1000;
console.log(addition);

{
 let addition = 2000;
 console.log(addition);
}



