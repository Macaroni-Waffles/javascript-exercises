// takes only 2 numbers
const add = function(number1, number2) {
  return number1 + number2;
};

// takes only 2 numbers
const subtract = function(number1, number2) {
	return number1 - number2;
};

// Takes each number in the array and adds it to the total, starting at 0.
const sum = function(array) {
	let answer = array.reduce((total, number) => total + number, 0);
  return answer;
};

const multiply = function(array) {
  let answer = array.reduce((total, number) => total * number);
  return answer;
};

// takes only 2 numbers
const power = function(number1, number2) {
	return number1 ** number2;
  // Should have been:
  // return Math.pow(number1, number2);
};

// factorial = number * (number -1) * (number -2), etc. e.g factorial of 5 is 5 * 4 * 3 * 2 * 1 which equals 120.
const factorial = function(number) {
  // Create an array of length of "number", fill that array starting at index 0, map onto that array incrementing by 1.
  let arrayOfNumber = Array(number).fill(0).map((value, index) => index + 1);
  // Reverse the array
  arrayOfNumber = arrayOfNumber.reverse();
  // multiply each number in the array by the total
  let answer = arrayOfNumber.reduce((total, num) => total * num);
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
