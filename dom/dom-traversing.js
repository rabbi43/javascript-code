// dom traversing
// find elements
const StudentList =document.querySelector(".StudentList");
// find the child elements
// select from full document:
var studentA =document.querySelector(".studentA");
// select from StudentList section:
var studentA =StudentList.querySelector(".studentA");

// method1:(from document)
var studentB =document.querySelector(".studentB");
// method2:(from parent)
var studentB =StudentList.querySelector(".studentB");
// method3:(from previous/next element)
var studentB =studentA.nextElementSibling;
// method4:(from parent)
var studentC =StudentList.children[2];
// studentC.innerHTML="changed";

// find parent element using children:
var parentElement =studentA.parentElement;
var studentC =parentElement.children[2];
studentC.innerHTML="hey!im studentC";

// find an element inside a div:
var div =document.querySelector("div p");
