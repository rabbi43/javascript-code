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
