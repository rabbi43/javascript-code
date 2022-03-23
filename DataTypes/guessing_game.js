// guessing game
var count = 0; // for count won times
var count2 = 0; // for count lost times
for(i=0;i<5;i++){ // for get input from user 5 times
	
	
	var guess = parseInt(prompt("Enter a number:"));
 var randomNum = Math.floor(Math.random(1)*5+1);
// condition
if(guess == randomNum){
	document.write("You have won..."+"<br>");
	count++; // for count loast ammount
}
else{
	document.write("Oops!You have lost!..."+"<br>");
 count2++; // for count loast ammount
}

}
// print how many times won & lost
document.write("You have won " + count +" times");
brk();
document.write("You have lost " + count2 + " times");

