// Import function from app
const {addition, multiplication, factorial} = require("./app")

test(
  // Description of the test
  'Adds 1 + 2 to equal 3', () => 
  {
  // Code setup for the test
  const TOTAL = addition(1,2);
  
  // Assert
  expect(TOTAL).toBe(3);
  }
);

test(
  // Description of the test
  'Multiplies 3 * 2 to equal 6', () => 
  {
  // Code setup for the test
  const TOTAL = multiplication(3,2);
  
  // Assert
  expect(TOTAL).toBe(6);
  }
);

test(
  // Description of the test
  'Calculates the factorial of 4 = 24', () => 
  {
  // Code setup for the test
  const positiveInteger = factorial(4);
  
  // Assert
  expect(positiveInteger).toBe(24);
  }
);

test(
  // Description of the test
  'Calculates a negative integer factorial, throws Error', () => 
  {
  // Code setup for the test
  const negativeInteger = factorial(-5);
  
  // Assert
  expect(negativeInteger).toEqual(Error("Integer must be positive"));
  }
);

test(
  // Description of the test
  'Calculates factorial of 0 = 1', () => 
  {
  // Code setup for the test
  const zeroInteger = factorial(0);
  
  // Assert
  expect(zeroInteger).toBe(1);
  }
);

test(
  // Description of the test
  'Calculates factorial of a non-integers, throws TypeError', () => 
  {
  // Code setup for the test
  const string = factorial("Test");
  const float = factorial(0.1);
  const list = factorial([1,4,"Test"]);
  const char = factorial("a");
  // Assert
  expect(string).toEqual(TypeError("Type should be an integer"));
  expect(float).toEqual(TypeError("Type should be an integer"));
  expect(list).toEqual(TypeError("Type should be an integer"));
  expect(char).toEqual(TypeError("Type should be an integer"));
  }
);

/**
 * There is a list of matchers (instead of toBe):
 * toEqual: compares the values of two variables/objects
 * toBeNull: checks if the value is null
 * toBeDefined: checks if the value is defined
 * toBeUndefined: checks if the value is undefined
 * toBeTruthy: checks if the value is true (similar to an if statement)
 * toBeFalsy: checks it he value is false (similar to an if statement)
 * toBeGreaterThan: checks if the result of the expect() function is greater than the argument
 * toContain: checks if the result of expect() contains a value
 * toHaveProperty: checks if an object has a property and optionally checks its value
 * toBeInstanceOf: checks if an object is an instance of a class
 * Matchers can also be negated by for example:
 *  expect(TOTAL).not.toBe(6)
 */
