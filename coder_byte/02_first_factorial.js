/*Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.*/


//******************** 
//SOLUTION 1 -- iteratively
//********************

/*create conditional statements: 
reject if less than 0, 
else if 0 = factorial is 1, 
if greater then 2, run a while loop,
decrement the number by 1,
and times the previous number to new number
*/

function FirstFactorial(num) { 
    debugger;
    if (num < 0) {
        return -1;
    }
    else if (num == 0) {
        return 1;
    }
    var x = num;
    while (num > 2) {
        num--;
        x *= num;
    }
    return x;
}


//******************** 
//SOLUTION 2 -- recursively
//******************** 

/*create conditional statements: 
reject if less than 0, 
else if 0 = factorial is 1, 
else call recursive method
*/

function factorial(num) {
    debugger;
    if (num < 0) {
        return -1;
    }
    else if (num == 0) {
        return 1;
    }
    else {
        return (num * factorial(num - 1));
    }
}

//*********************** 
//TESTING 
//***********************
var result = factorial(4);
console.log(result);

// Output: 40320

//*********************** 
//SIDE NOTE
//***********************

/*Iterative functions – are loop based imperative repetitions of a process (in contrast to recursion which has a more declarative approach).*/

/*Recursive function – is a function that is partially defined by itself and consists of some simple case with a known answer. Example: Fibonacci number sequence, factorial function, quick sort and more. Recursive uses call stacks which can take up a lot of memory- saving previous results in call stack utilizing memory.*/

/*Using the == operator (Equality)

true == 1; //true, because 'true' is converted to 1 and then compared
"2" == 2;  //true, because "2" is converted to 2 and then compared

Using the === operator (Identity)

true === 1; //false
"2" === 2;  //false

This is because the equality operator == does type coercion, meaning that the interpreter implicitly tries to convert the values before comparing.

On the other hand, the identity operator === does not do type coercion, and thus does not convert the values when comparing.*/

