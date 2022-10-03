// Import function from app
const {addition, multiplication, factorial} = require("./app")

test(
  // Description of the test
  'Adds 1 + 2 to equal 3', () => 
  {
  // Code setup for the test
  const TOTAL = addition(1,2);
  
  // Assert
  expect(TOTAL).toBe(5);
  }
);
// Test must fail. 
// Just to see what github does with this file.