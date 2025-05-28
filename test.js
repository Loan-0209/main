// Simple test for index.js
const { add } = require('./index');

// Test the add function
console.log('Testing add function...');
const result = add(2, 3);
const expected = 5;

if (result === expected) {
  console.log('✅ Test passed!');
} else {
  console.log(`❌ Test failed! Expected ${expected}, got ${result}`);
  process.exit(1);
}

console.log('All tests passed!');