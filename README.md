# Custom Array Methods

This project provides custom implementations of common array methods in JavaScript. The three custom functions are:

- **Custom Filter Function (`customFilter.js`):**
  - `customFilter(array, callback)`: Filters elements of the array based on the provided callback function.
  - Examples:
    ```javascript
    // Custom filter function
    function customFilter(array, callback) {
      const result = [];

      for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
          result.push(array[i]);
        }
      }

      return result;
    }

    // Example 1: Filter even numbers
    const numbersToFilter = [1, 2, 3, 4, 5, 6];
    const evenNumbers = customFilter(numbersToFilter, (num) => num % 2 === 0);
    console.log(evenNumbers);

    // Example 2: Filter numbers greater than 3
    const greaterThanThree = customFilter(numbersToFilter, (num) => num > 3);
    console.log(greaterThanThree);
    ```

- **Custom Reduce Function (`customReduce.js`):**
  - `customReduce(array, callback, initialValue)`: Reduces the array to a single value based on the provided callback function.
  - Examples:
    ```javascript
    // Custom reduce function
    function customReduce(array, callback, initialValue) {
      let accumulator = initialValue === undefined ? array[0] : initialValue;
      const startIndex = initialValue === undefined ? 1 : 0;

      for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
      }

      return accumulator;
    }

    // Example 1: Sum all numbers
    const numbersToReduce = [1, 2, 3, 4, 5];
    const sum = customReduce(numbersToReduce, (acc, num) => acc + num, 0);
    console.log(sum);

    // Example 2: Concatenate strings
    const words = ['Hello', ' ', 'World', '!'];
    const phrase = customReduce(words, (acc, word) => acc + word, "");
    console.log(phrase);
    ```

- **Custom Map Function (`customMap.js`):**
  - `customMap(array, callback)`: Creates a new array by applying the provided callback function to each element of the original array.
  - Examples:
    ```javascript
    // Custom map function
    function customMap(array, callback) {
      const result = [];

      for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
      }

      return result;
    }

    // Example: Double each number
    const numbersToMap = [1, 2, 3, 4, 5];
    const doubledNumbers = customMap(numbersToMap, (num) => num * 2);
    console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
    ```