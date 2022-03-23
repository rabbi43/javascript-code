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
