
// //1. What is the difference between str.charAt(2) and str[2]? Which one is preferred and why?
// str = 'madhuri'
// console.log(str.charAt(2))// returns the character at index 2 
// console.log(str[2])//accesses the character like an array.


// // 2.Given str = "hello world", what does str.toUpperCase() return?

// str = 'hello world'
// console.log(str.toUpperCase())

// // 3.What does str.toLowerCase() return if str = "JavaScript"?

// str = "JavaScript"
// console.log(str.toLowerCase())


// // 4.Given str = " learn js ", how can you remove all the leading and trailing spaces?

// str = "learn js"
// console.log(str.trim())

// // 5.What will be the result of "abc".repeat(3)?

// str = "abc"
// console.log("abc".repeat(3))


// // 6.If str = "hello world", what does str.includes("lo", 3) return and why?

// str = "hello world"
// console.log(str.includes("lo",3))//true
// //"lo" starts at index 3 in "hello world", and includes("lo", 3) checks from index 3 onward.


// // 7.How do you check if a string starts with a specific substring? For example: "codewithme".startsWith("code")

// str = "codewithme"
// console.log("codewithme".startsWith("code"))


// // 8.What is the output of "hello".endsWith("lo")?

// str = "hello"
// console.log("hello".endsWith("lo"))//true


// // 9.How can you find the position of the first occurrence of "a" in "banana" using a string method?

// str = "banana"
// console.log("banana".indexOf("a"))//1


// // 10.How is indexOf() different from lastIndexOf()? Explain with "banana" as an example.

// str = "banana"
// console.log("banana".indexOf())//-1
// console.log("banana".lastIndexOf())//-1


// // 11.Given str = "frontend-backend", what will str.split("-") return?

// str = "frontend-backend"
// console.log(str.split("-"))



// // 12.What is the use of substring(2, 6)? How is it different from slice(2, 6)?

// str = "madhuri"
// console.log(str.substring(2,6))//characters from index 2 to 5
// console.log(str.slice(2,6))//same result, but allows negative indices (substring doesn't)



// // 13.What is the result of "abc".padStart(6, "*")? What about padEnd?

// str = "abc"
// console.log("abc".padStart(6,"*"))
// console.log("abc".padEnd(6,"*"))



// // 14.How can you replace "hello" with "hi" in the string "hello world" using a string method?

// str = "hello world"
// console.log("hello world".replace("hello","hi"))


// // 15.Write a code snippet to reverse a string "hello" using built-in methods.

// str = "hello"
// console.log("hello".split("").reverse().join(""))

 

// Assignment Title: Practice with Strings and Arrays in JavaScript

// Objective:
// Strengthen your understanding of JavaScript string and array operations through hands-on problem solving.

// Instructions:
// - Use only vanilla JavaScript.
// - Write functions for each question.
// - Do not use external libraries (e.g., lodash).
// - Submit a `.js` file with all your solutions, clearly commented.

// 🧠 STRING QUESTIONS (5)

// 1. **Reverse a String**  
//    Write a function `reverseString(str)` that takes a string and returns it reversed.  
//    Example: `"hello" → "olleh"`


// str = "hello madhuri"
// function reverseString(str){
//     return str.split('').reverse().join('')
// }console.log(str.split('').reverse().join(''))



// 2. **Check Palindrome**  
//    Write a function `isPalindrome(str)` to check if a string is a palindrome (case-insensitive).  
//    Example: `"Madam" → true`


// function isPalindrome(str) {
//   const lowerStr = str.toLowerCase();
//   let left = 0;
//   let right = lowerStr.length - 1;

//   while (left < right) {
//     if (lowerStr[left] !== lowerStr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// }

// console.log(isPalindrome("Madam")); 
// console.log(isPalindrome("hahaji")); 



// 3. **Count Vowels**  
//    Write a function `countVowels(str)` to count the number of vowels in the given string.  
//    Example: `"JavaScript" → 3`


// function countVowels(str){
//     const vowels= 'aeiouAEIOU';
//     let count = 0;
//     for( let char of str){
//         if(vowels.includes(char)){
//      count++;
// }}
// return count;
// }console.log(countVowels("MAdhUri"))


// 4. **Capitalize First Letter of Each Word**  
//    Write a function `capitalizeWords(str)` that capitalizes the first letter of every word in a sentence.  
//    Example: `"hello world" → "Hello World"`


// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map(word => {
//       if (word.length === 0) return "";                         // 
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }
// console.log(capitalizeWords("hello world")); 
// console.log(capitalizeWords("javaScript is fun")); 


// 5. **Character Frequency**  
//    Write a function `charFrequency(str)` that returns an object with the frequency of each character in the string.  
//    Example: `"aabbbc" → { a: 2, b: 3, c: 1 }`


// function charFrequency(str) {
//   const freq = {};

//   for (let char of str) {
//     freq[char] = (freq[char] || 0) + 1;
//   }                                                     //

//   return freq;
// }
// console.log(charFrequency("aabbbc")); 
// console.log(charFrequency("hello"));  
// console.log(charFrequency("fffffjjjjjssiimmaac"));


// 🧠 ARRAY QUESTIONS (5)

// 1. **Remove Duplicates**  
//    Write a function `removeDuplicates(arr)` that removes duplicate values from an array.  
//    Example: `[1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]`

// function removeDuplicates(arr){
// const result = [];
// for (let item of arr) {
// if (!result.includes(item)) {
// result.push(item);
// }
// }
// return result;
// }console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


// 2. **Flatten an Array**  
//    Write a function `flattenArray(arr)` to flatten a nested array (1 level deep).  
//    Example: `[[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]`

// function flattenArray(arr){
// const result = [];
// for (let sub of arr) {
// for (let item of sub) {
// result.push(item);
// }
// }return result;
// }console.log(flattenArray([[1, 2], [3, 4], [5]])); 


// 3. **Find Max and Min**  
//    Write a function `findMaxMin(arr)` that returns the maximum and minimum number in an array.  
//    Example: `[4, 1, 9, -2] → { max: 9, min: -2 }`


// function findMaxMin(arr){
// let max = arr[0];
// let min = arr[0];

// for (let num of arr) {
// if (num > max) max = num;
// if (num < min) min = num;

// }
// return { max, min };
// }console.log(findMaxMin([4, 1, 9, -2])); 


// 4. **Sum of Even Numbers**  
//    Write a function `sumEven(arr)` that returns the sum of all even numbers in the array.  
//    Example: `[1, 2, 3, 4, 5, 6] → 12`


// function sumEven(arr) {
// let sum = 0;
// for (let num of arr) {
// if (num % 2 === 0) {
// sum += num;
//     }
//   }
//   return sum;
// }
// console.log(sumEven([1, 2, 3, 4, 5, 6])); 



// 5. **Group by Type**  
//    Write a function `groupByType(arr)` that groups array elements by their type.  
//    Example: `[1, 'a', true, 2, 'b'] → { number: [1, 2], string: ['a', 'b'], boolean: [true] }`



// function groupByType(arr) {
//   const grouped = {};

// for (let item of arr) {
//     let type = typeof item;
//     if (!grouped[type]) {                      //
//       grouped[type] = [];
//     }
//     grouped[type].push(item);
//   }
//   return grouped;
// }console.log(groupByType([1, 'a', true, 2, 'b']));

