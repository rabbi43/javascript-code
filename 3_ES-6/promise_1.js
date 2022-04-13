const p1 =new Promise((resolve,reject)=>{
//   resolve("Project completed!");
        setTimeout(()=>{
        resolve("Project completed!");
   },3000)
});

const p2 =new Promise((resolve,reject)=>{
//   resolve("Project uncompleted!");
        setTimeout(()=>{
        resolve("Project uncompleted!");
   },4000)
});

//Promise.all([p1,p2]).then((res)=>console.log(res))
// after .then(([r1,r2])) > array destructuring
Promise.race([p1,p2]).then((res)=>console.log(res))
