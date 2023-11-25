// Custom filter funciton
function customFilter(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5, 6];

// Example 1: Filter even numbers
const evenNumbers = customFilter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);

// Example 2: Filter numbers greater than 3
const greaterThanThree = customFilter(numbers, (num) => num > 3);
console.log(greaterThanThree);
