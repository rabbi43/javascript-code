var sd =[
   {
      name : "rabbi",
      age : 20,
      hobby : "coding",
      gpa : 4.67
   }
   ,
   {
      name : "sakib",
      age : 21,
      hobby : "reading",
      gpa : 3.25
   }
   ,
   {
      name : "alamin",
      age : 23,
      hobby : "music",
      gpa : 4.17
   }
   ,
   {
      name : "pahchan",
      age : 23,
      hobby : "music",
      gpa : 3.17
   }

];
//console.log(sd)
// using traditional function
/*function data(){
  return sd.filter(function(x){ return x.gpa > 4}).map(function(y){ return y.name})
}
console.log(data())
*/

//using ARROW function

const data = () => sd.filter((x)=> x.gpa > 4).map((y)=>y.name);
console.log(data())



