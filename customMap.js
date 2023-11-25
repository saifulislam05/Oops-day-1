function cuotomMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}

const numbersToMap = [1, 2, 3, 4, 5];

// Example: Double each number
const doubledNumbers = cuotomMap(numbersToMap, (num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
