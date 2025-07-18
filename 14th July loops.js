// 🔁 1. Loop Basics
// Print numbers from 1 to 10 using a for loop.

// for(let i=1;i<=10;i++)
// {
//     console.log(i);
// }


// Print numbers from 10 down to 1 using a while loop.

// let i = 10;
// while(i>=1){
//     console.log(i);
//     i--;
    
// }


// Print numbers from 1 to 5 using a do...while loop.

// let i = 1;
// do{
//     console.log(i);
//     i++;    
// }while(i<=5);



// 🔁 2. Even, Odd, Multiples
// Print all even numbers from 1 to 50.

// for (let i = 1; i <= 50; i++) {
//if (i % 2 === 0) console.log(i);
//}



// Print all odd numbers between 20 and 50.

// for(let i=21;i<=50;i=i+2){
//     console.log(i);
    
// }


// Print all numbers divisible by 3 from 1 to 30.

// for(let i=1;i<=30;i++){
//     if(i%3==0)console.log(i);
    
// }


// ➕ 3. Summation & Product
// Find the sum of numbers from 1 to 100.

// let sum=0;
// for(let i=1;i<=100;i++){
//     sum=sum+i;
// }
// console.log("sum:",sum);



// Find the product of numbers from 1 to 10.

// let product = 1;
// for(let i=1;i<=10;i++){
//     product=product*i;
// }console.log("numbers:",product );


// Find the sum of all even numbers between 1 and 50.

// let evensum = 0;
// for(let i=0;i<=50;i=i+2){
//     evensum=evensum+i;
// }console.log("sum of even:",evensum);



// Find the sum of squares of numbers from 1 to 10.
// (i.e., 1² + 2² + ... + 10²)

// let squaresum = 0;
// for(let i = 1;i<=10;i++){
//     squaresum=squaresum+i*i;
// }console.log("sum of square:",squaresum);




// 🧠 4. Conditionals Inside Loops
// Print numbers from 1 to 20, skip multiples of 4 using continue.

// for(let i = 1;i<=20;i++){
//     if( i%4 === 0)continue;
// console.log(i);
// }

// Print numbers from 1 to 10, stop at 7 using break.

// for(let i = 1;i<=10;i++){
//     if(i%7==0)break;
//     console.log(i);
    
// }

// Count how many numbers between 1 and 100 are divisible by both 3 and 5.

// let count = 0;
// for(let i = 1;i<=100;i++){
//     if(i%3 == 0 && i%5 == 0)
//         count++;
// }console.log("divisible by both 3 and 5:",count);

    
// 🔂 5. Nested Loops (Without Patterns)
// Print all pairs (i, j) where i and j go from 1 to 3.

// for(let i = 1;i<=3;i++){
//     for(let j =1;j<=3;j++){
//         console.log(`(${i},${j})`);
        
//     }
// }

// Find all combinations of (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4).

// for(let a = 1;a<=4;a++){
//     for(let b =1;b<=4;b++){
//         if(a+b==5){
//     console.log(`(${a},${b})`);
// }
// }
// }


// 🧮 6. Logic-Based Tasks
// Check if a given number is a prime number using a loop.

// let num = 36;
// let isPrime = true;
// if(num<=1)isPrime=false;
// for(let i=2;i<=num;i++){
//     if(num%i==0){
//         isPrime=false;
//         break;
//     }
// }console.log(`${num} is prime ? :`,isPrime);


// Print the factorial of a number (e.g., 6! = 720).

// let factnum = 3;
// let factorial = 1;
// for(let i=1;i<=factnum;i++){
//     factorial=factorial*i
// }console.log(`${factnum}!`,factorial);


// Print the reverse of a number using a loop (e.g., 123 → 321).

// let n = 123;
// let reversed = 0;
// while (n > 0) {
//   reversed = reversed * 10 + (n % 10);
//   n = Math.floor(n / 10);
// } console.log("Reversed number:", reversed);



// let n = 123;
// let reversed = 0;
// for (; n > 0; n =Math.floor(n / 10)) {
//   reversed = reversed * 10 + (n % 10);
// }console.log("Reversed number:", reversed);



// Count the number of digits in a given number using a loop.

// let digitnum = 89543736;
// let digit = 0;
// while(digitnum>0){
//     digit++;
// digitnum=Math.floor (digitnum/10);
// }console.log("count the no. of digits:",digit);



// let dNum = 54321;
// let digits = 0;
// for (; dNum > 0; dNum = Math.floor(dNum / 10)) {
//  digits++;
// }console.log("Digit count:", digits);



// Check if a number is a palindrome (e.g., 121, 1331) using only number operations and loops.

// let palinnum = 131999;
// let temp = palinnum;
// let rev = 0;
// while(temp>0){
//   rev = rev * 10 + (temp % 10);
//   temp = Math.floor(temp / 10);
// }console.log(`${palinnum} is palindrome?`, palinnum === rev);



// let pNum = 1331;
// let rev = 0;
// for (let temp = pNum; temp > 0; temp = Math.floor(temp / 10)) {
//  rev = rev * 10 + (temp % 10);
// } console.log(`${pNum} is palindrome?`, pNum === rev);


// Use nested for loops to print a 3x3 grid of stars (*).

// Create a triangle pattern of # using nested loops.
// Example:

// #
// ##
// ###
