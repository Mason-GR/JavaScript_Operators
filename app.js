console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

// YOUR CODE HERE
var a = 20;
var b = 4;
var add = a + b;
var minus = a - b;
var multiply = a * b;
var dividing = a / b;

console.log(a); // -> 20
console.log(b); // -> 4
console.log(add); // -> 24
console.log(minus); // -> 16
console.log(multiply); // -> 80
console.log(dividing); // -> 5

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

// YOUR CODE HERE
let c = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";

console.log(c + str); // -> 1111
console.log(c + str2); // -> 11eleven
console.log(c + isPresent); // -> 12
console.log(c + firstName); // -> 11Jackie
console.log(c + lastName); // -> 11Chan

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// YOUR CODE HERE
let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

console.log(d == str3); // -> true
console.log(d === str4); // -> false
console.log(!isPresent2); // -> true
console.log("eleven" == str3 && d >= str4); // -> false
console.log(!isPresent2 /*true*/ || isPresent2 /*false*/); // -> true
console.log(0 == false); // -> true
console.log(0 === false); // -> false
console.log(0 != false); // -> false
console.log(0 !== false); // -> true
