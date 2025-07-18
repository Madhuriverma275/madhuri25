
//1. What is the difference between str.charAt(2) and str[2]? Which one is preferred and why?
str = 'madhuri'
console.log(str.charAt(2))// returns the character at index 2 
console.log(str[2])//accesses the character like an array.


// 2.Given str = "hello world", what does str.toUpperCase() return?

str = 'hello world'
console.log(str.toUpperCase())

// 3.What does str.toLowerCase() return if str = "JavaScript"?

str = "JavaScript"
console.log(str.toLowerCase())


// 4.Given str = " learn js ", how can you remove all the leading and trailing spaces?

str = "learn js"
console.log(str.trim())

// 5.What will be the result of "abc".repeat(3)?

str = "abc"
console.log("abc".repeat(3))


// 6.If str = "hello world", what does str.includes("lo", 3) return and why?

str = "hello world"
console.log(str.includes("lo",3))//true
//"lo" starts at index 3 in "hello world", and includes("lo", 3) checks from index 3 onward.


// 7.How do you check if a string starts with a specific substring? For example: "codewithme".startsWith("code")

str = "codewithme"
console.log("codewithme".startsWith("code"))


// 8.What is the output of "hello".endsWith("lo")?

str = "hello"
console.log("hello".endsWith("lo"))//true


// 9.How can you find the position of the first occurrence of "a" in "banana" using a string method?

str = "banana"
console.log("banana".indexOf("a"))//1


// 10.How is indexOf() different from lastIndexOf()? Explain with "banana" as an example.

str = "banana"
console.log("banana".indexOf())//-1
console.log("banana".lastIndexOf())//-1


// 11.Given str = "frontend-backend", what will str.split("-") return?

str = "frontend-backend"
console.log(str.split("-"))



// 12.What is the use of substring(2, 6)? How is it different from slice(2, 6)?

str = "madhuri"
console.log(str.substring(2,6))//characters from index 2 to 5
console.log(str.slice(2,6))//same result, but allows negative indices (substring doesn't)



// 13.What is the result of "abc".padStart(6, "*")? What about padEnd?

str = "abc"
console.log("abc".padStart(6,"*"))
console.log("abc".padEnd(6,"*"))



// 14.How can you replace "hello" with "hi" in the string "hello world" using a string method?

str = "hello world"
console.log("hello world".replace("hello","hi"))


// 15.Write a code snippet to reverse a string "hello" using built-in methods.

str = "hello"
console.log("hello".split("").reverse().join(""))

 