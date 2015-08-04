/*Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 

Use the Parameter Testing feature in the box below to test your code with different arguments.*/


//**********************************************
// SOLUTION 1 -- ITERATVELY 
function FirstFactorial(num) { 
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
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

var result = factorial(4);
console.log(result);

// Output: 40320


//**********************************************
// SOLUTION 2 -- RECURSIVELY 



function factorial(num)
{
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    // Otherwise, call this recursive procedure again.
    else {
        return (num * factorial(num - 1));
    }
}

var result = factorial(8);
console.log(result);

// Output: 40320