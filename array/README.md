# Array Basic:
```
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

```

# 1D Array:
```
// create a function
function highestScore(){
	//document.write(names);
	var max = names[0];
	for(x=1;x<names.length;x++){// loop start from one/1 because already max=0;
		if(max < names[x]){//condition
			max = names[x];// the max value/digit
		}
	}
	return max;//return the max value
	
}


var names = [33,700,89,99];//1dimentional array
var received = highestScore(names);//max value received from return...
document.write(received);//print the max value


```
# 2D Array:
```
function highestRunScorer(playersInfo){
	var highestScorer = playersInfo[0][0];
 var highestScore = playersInfo[0][1];
 
 for(var x=1;x<playersInfo.length;x++){
 
 if(highestScore < playersInfo[x][1]){
 	 highestScore = playersInfo[x][1];
 	 highestScorer = playersInfo[x][0];
 }
 
}
  return highestScorer;
}

// 2d array 
var names = [
// 0-3 row
// 0-1 column
   ["sakib",10],
   ["alamin",403],
   ["pahchan",87],
   ["rabbi",49]

];
var p = highestRunScorer(names);
document.write(p);


```
