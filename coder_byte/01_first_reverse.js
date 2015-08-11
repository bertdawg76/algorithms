/*Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. */

var string = "coderbyte";

/************************ 
SOLUTION 1 - chaining method
************************/

/*split the string at every character, 
reverse it (note: only works on arrays, hence we have to use .split),
join to patch our array back together,
return the modified string*/

function FirstReverse(str) { 
	debugger;
	return str.split("").reverse().join("");  
}

/************************ 
SOLUTION 2 
************************/

/*create an empty variable, 
run a decrement for loop method (note: index of an array starts at 0),
add a string to the reverseString for every loop.  
return the modified reverseString*/

function FirstReverse(str) { 
	debugger;
	var reverseString = "";
	for (var i = str.length - 1; i >= 0; i--)
		reverseString += str[i];
	return reverseString;
}

/************************ 
TESTING
************************/
FirstReverse(string);   
