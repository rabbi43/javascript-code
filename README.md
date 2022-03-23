# 2d Array:
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
