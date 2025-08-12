// How would you flatten a deeply nested array (e.g., [1, [2, [3, [4]], 5]]) to a single array using recursion or a built-in method?
// [1, 2, 3, 4, 5]

// function flatten(arr) {
//   let result = [];
//   arr.forEach(el => {
//     if (Array.isArray(el)) {
//       result = result.concat(flatten(el));
//     } else {
//       result.push(el);
//     }
//   });
//   return result;
// }

// console.log(flatten([1, [2, [3, [4]], 5]])); 


// Given an array of numbers, how do you remove all duplicate values without using Set?
// [1, 2, 3]

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates([1, 2, 2, 3, 1]));


// What will be the output of the following?
// const a = [1, 2, 3];
// const b = a;
// b.push(4);
// console.log(a); // ?



// How would you find the second largest number in an array like [10, 5, 8, 1, 9] without sorting?

// function secondLargest(arr) {
//   let first = -Infinity, second = -Infinity;
//   for (let num of arr) {
//     if (num > first) {
//       second = first;
//       first = num;
//     } else if (num > second && num < first) {
//       second = num;
//     }
//   }
//   return second;
// }
// console.log(secondLargest([10, 5, 8, 1, 9])); 


// How do you count the number of occurrences of each element in an array?
// Example: [1, 2, 2, 3, 1, 1] → {1: 3, 2: 2, 3: 1}

// function countOccurrences(arr) {
//   return arr.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
//   }, {});
// }

// console.log(countOccurrences([1, 2, 2, 3, 1, 1]));


// Write a custom implementation of the .map() method.

// Array.prototype.myMap = function(callback) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };

// console.log([1, 2, 3].myMap(x => x * 2));


// How do you sort an array of objects by multiple properties?
// Example: [{name: "John", age: 30}, {name: "Alice", age: 25}, {name: "John", age: 22}]
// Sort by name (alphabetical), then age (ascending)

// const arr = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "John", age: 22 }
// ];

// arr.sort((a, b) => {
//   if (a.name === b.name) return a.age - b.age;
//   return a.name.localeCompare(b.name);
// });

// console.log(arr);


// Given an array of numbers, return a new array containing only the elements that are prime numbers.

// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// console.log([1, 2, 3, 4, 5, 6, 7].filter(isPrime));


// What’s the difference between forEach and map in terms of return value and use-case?


// forEach: Executes a function for each element, does not return a new array. Used for side effects.
// map: Transforms each element, returns a new array.


// What is the result of this?

// const a = [1, 2, 3];
// const b = a.slice(0, 2);
// b[0] = 100;
// console.log(a); 


// How do you find all pairs of elements in an array whose sum equals a target number?
// Example: [1, 2, 3, 4, 5], target = 6 → [[1,5], [2,4]]

// function findPairs(arr, target) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         result.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return result;
// }
// console.log(findPairs([1, 2, 3, 4, 5], 6));

// [[1, 5], [2, 4]]



// How would you chunk an array into groups of N elements?
// Example: [1,2,3,4,5,6], N = 2 → [[1,2], [3,4], [5,6]]


// function chunkArray(arr, size) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));
// [[1, 2], [3, 4], [5, 6]]



// Explain what happens in this reduce expression:
// [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0)


// [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
// // Step-by-step: (((0 + 1) + 2) + 3) + 4 → 10


// What is the time complexity of splice() in the worst case, and why?

// Worst case: O(n)
// Reason: Removing/inserting elements may require shifting all subsequent elements in the array.

