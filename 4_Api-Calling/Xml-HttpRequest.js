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

// Xml http request
// event:onload(),onerror()
// property: response,responseText,responseType,responseUrl,status,statusText
// function: open(),send(),setRequestHeader()
// methods:get,post,put,patch,delete

// API: https://jsonplaceholder.typicode.com/posts

// একই কাজ যেন বার-বার করতে পারি তাই একটি function এর মধ্যে পুরো মেথড রেখে দিলাম
const makeRequest =(method,url,data)=>{
   
   // প্রোমিজ ব্যবহার করলাম
   return new Promise((resolve,reject)=>{
      const xhr = new XMLHttpRequest();
    xhr.open(method,url)
    
    xhr.setRequestHeader('Content-Type','application/json')
    
    xhr.onload=()=>{// এর মাধ্যমে ডাটা আউটপুটে দেখনো হয়
       let x = xhr.response;
       document.write(xhr.status);
       document.write(x);
    }
    
    xhr.onerror=()=>{// এরর হ্যান্ডলিং এর জন্য ব্যবহার করা হয়
       document.write("Error here!");
    }
    // এই পদ্ধতিতে ডাটা সেন্ড করা হয় সার্ভারে এবং formate বলে দিতে হয় 
    xhr.send(JSON.stringify(data))
    
   })
    
};

// এই পদ্ধতিতে ডাটা সার্ভার থেকে আনা হয়
const getData =()=>{
   makeRequest('GET','https:jsonplaceholder.typicode.com/posts').then((res)=>document.write(res));
}
// getData();
// এই পদ্ধতিতে ডাটা সার্ভারে পাঠানো হয়
const sendData =()=>{
   makeRequest('POST','https:jsonplaceholder.typicode.com/posts',{
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
   });
}
//sendData();
// এই পদ্ধতিতে ডাটা আপডেট করা হয়
const updateData =()=>{
   makeRequest('PUT','https:jsonplaceholder.typicode.com/posts/1',{
      id: 1,
      title: 'foor',
      body: 'barn',
      userId: 100,
   });
}
// updateData();
// এই পদ্ধতিতে নির্দিষ্ট ডাটা পরিবর্তন করা হয়
const patchData =()=>{
   makeRequest('PATCH','https:jsonplaceholder.typicode.com/posts/1',{
      
      title: 'HELLO IM NEW TITLE',
      
   });
}
// patchData();
// এই পদ্ধতিতে নির্দিষ্ট ডাটা ডিলিট করা হয়
const deleteData =()=>{
   makeRequest('DELETE','https:jsonplaceholder.typicode.com/posts/1',{
 });
}
// deleteData()
