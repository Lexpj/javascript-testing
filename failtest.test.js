// Import function from app
const {addition, multiplication, factorial} = require("./app")

test(
  // Description of the test
  'Adds 1 + 2 to equal 3', () => 
  {
  // Code setup for the test
  const TOTAL = addition(1,2);
  
  // Assert
  // Test yourself what happens when you change the 3 to something else
  // You should notice already that the debugger tells you it is wrong
  // Furthermore, after pushing, Github will send you a notification
  // not all tests have passed. There will be no checkmark, but instead a 
  // red cross. If you open the test environment, you will notice
  // that app.test.js has passed all tests, but not this file.
  expect(TOTAL).toBe(3);
  }
);
// Test must fail. 
// Just to see what github does with this file.