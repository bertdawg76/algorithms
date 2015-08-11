// The two ways of declaring a function are:

var functionOne = function() {
    // Some code
};
function functionTwo() {
    // Some code
}

// What is the difference?

  // Error
  functionOne();

  var functionOne = function() {
  };

  // No error
  functionTwo();

  function functionTwo() {
  }

/*The difference isn't only that they are parsed at different times. Essentially, functionOne is merely a variable that has an anonymous function assigned to it, whereas functionTwo is actually a named function. Call .toString() on both to see the difference. This is significant in some cases where you want to get the name of a function programmatically.

The first one is a function expression the second one is a function declaration

http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname*/