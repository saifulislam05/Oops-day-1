function cusomReduce(array, callback, initialValue) {
  let accumulator = initialValue === undefined ? array[0] : initialValue;
  const startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

const numbersToReduce = [1, 2, 3, 4, 5];

// Example 1: Sum all numbers
const sum = cusomReduce(numbersToReduce, (acc, num) => acc + num, 0);
console.log(sum);

// Example 2: Concatenate strings
const words = ['Hello', ' ', 'World', '!'];
const phrase = cusomReduce(words, (acc, word) => acc + word, "");
console.log(phrase); 
