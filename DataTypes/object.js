// 23 March,2022
// Author: Fazle Rabbi
// this function created just for use break
function brk(){
	document.write("</br>");
}



// notes~ why required use an object:
//Think you need to store 10 Student information,
//then you will this work easyly and faster using object.

// NOTES THIS IN YOUR brain:-)
// creating object
// printing the value of an object
// creating constructor inside an object
// creating function inside a constructor



// constructor
function Student(name,age,lang){
	
	this.name = name;
	this.age = age;
	this.lang = lang;
	
	// adding function
	this.display = function(){
		document.write(this.name);
		document.write(this.age);
		document.write(this.lang);
	}
	
}

// using constructor
var student1 = new Student("john ",20 ,[" bengali","english","hindi"]);
student1.display();


// object
/*var student1 = {
	name : "john",
	age : 20,
	lang : ["bengali","english","hindi"]
}


var student2 = {
	name : "smith",
	age : 25,
	lang : ["arabi","english","hindi"]
}


var student3 = {
	name : "david",
	age : 23,
	lang : ["bengali","english","urdhu"]
}
document.write(student3.name);
*/

