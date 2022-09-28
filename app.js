//Of course, all the right docstrings must be included.
//Since this is not in the project, this is not necessary
//(and honestly, I hope you understand what addition,
//multiplication and factorial does).

function addition(a,b) {
  return a+b;
}
function multiplication(a,b) {
  return a*b;
}
function factorial(a) {
    // Only type int is accepted in this function
    if (!Number.isInteger(a)) {
        return new TypeError("Type should be an integer")
    }

    // A negative integer does not work
    if (a < 0) {
        return new Error("Integer must be positive");
    }
    // Factorial of 0 is 1. End of recursion
    else if (a == 0) {
        return 1;
    }
    // Factorial of integers will decrease the number and continue
    // recursion
    else if (a > 0) {
        return a * factorial(a-1);
    }
}

// Exports all modules, such that these can be used in 
// other files. This includes the test file.
module.exports = {addition,
                  multiplication,
                  factorial
                 }
