// Part 1: Data Types

// 1. Create variables of different data types
const stringVar = "Hello, World!";
const numberVar = 50;
const booleanVar = true;
const nullVar = null;
const undefinedVar = undefined;
const objectVar = { name: "John", age: 30 };
const symbolVar = Symbol("description");

// 2. Print these variables to the console
console.log("String:", stringVar);
console.log("Number:", numberVar);
console.log("Boolean:", booleanVar);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);
console.log("Object:", objectVar);
console.log("Symbol:", symbolVar);
// Part 2: Arrays

// 1. Create an array of numbers
const numbers = [5, 12, 8, 21, 3, 7];

// 2. Use the map method to create a new array with each number multiplied by 2
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

// 3. Use the filter method to create a new array with numbers greater than 10
const numbersGreaterThanTen = numbers.filter(num => num > 10);
console.log("Numbers Greater Than 10:", numbersGreaterThanTen);

// 4. Use the reduce method to find the sum of all numbers in the array
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
console.log("Sum of Numbers:", sum);

// 5. Use the forEach method to print each number in the array to the console
console.log("Numbers:");
numbers.forEach(num => console.log(num));
// Part 3: Functions

// 1. Create a function named greet that takes a name parameter and prints a greeting message
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Alice");

// 2. Create a function named sumArray that takes an array of numbers and returns the sum
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log("Sum of Array:", sumArray([1, 2, 3, 4, 5]));

// 3. Create a function named findMax that takes an array of numbers and returns the maximum number
function findMax(arr) {
    return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
}
console.log("Max of Array:", findMax([1, 2, 3, 4, 5]));

