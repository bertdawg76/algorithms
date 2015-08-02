/*Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 

Use the Parameter Testing feature in the box below to test your code with different arguments.*/

var string = "coderbyte";

//*********************** SOLUTION 1 ***********************
/*split the string, 
reverse it and 
join it*/

function FirstReverse(str) { 
	return str.split("").reverse().join("");  
}

//*********************** SOLUTION 2 ***********************
/*create an empty variable, 
run a decrement for loop 
and push it in the empty variable */

function FirstReverse(str) { 
	var reverseString = "";
	for (var i = str.length - 1; i >= 0; i--)
		reverseString += str[i];
	return reverseString;
}

//*********************** TESTING ***********************
FirstReverse(string);                          


