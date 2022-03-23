// 23 March,2022
// Author: Fazle Rabbi
// this function created just for use break
function brk(){
	document.write("</br>");
}

// 4 method i know for creating Array
// two method are using new Array() function
// and two method are without using new Array() function

// method:1 creating array with new Array() function
var names = new Array();
names[0] = "sakib",
names[1] = "alamin",
names[2] = "pahchan",
names[3] = "rabbi",
document.write(names);

brk();// for break

// method:2 creating array with new Array() function
var names2 = new Array("sakib","alamin","pahchan","rabbi");
document.write(names2);

brk();// for break

// method:3 creating array without new Array() function
var friendsNames = ["sakib","alamin","pahchan","rabbi"];
document.write(friendsNames);

brk();// for break

var friendsNames2 = [];
friendsNames2[0] = "sakib";
friendsNames2[1] = "alamin";
friendsNames2[2] = "pahchan";
friendsNames2[3] = "rabbi";
document.write(friendsNames2);

brk();// for break

// print a specific value from an array
document.write(friendsNames[3]);
