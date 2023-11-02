/* 
 * filename: ComplexProgram.js
 * 
 * This code is a complex program that performs various advanced operations.
 * It includes multiple functions, objects, loops, conditionals, and data manipulation.
 * The program also demonstrates good coding practices such as comments, indentation, and error handling.
 */

// Object representing a Person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to calculate the factorial of a number
function factorial(num) {
  let result = 1;
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to find the sum of even numbers in an array
function sumEvenNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Calculate the sum of numbers using recursion
function sumRecursive(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRecursive(arr.slice(1));
}

// Main program logic
try {
  const person = new Person("John Doe", 30, "Male");
  person.introduce();

  const fact = factorial(5);
  console.log(`Factorial of 5: ${fact}`);

  console.log(`Prime numbers in the range 1-10:`);
  for (let i = 1; i <= 10; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }

  const sum = sumEvenNumbers(numbers);
  console.log(`Sum of even numbers in the array ${numbers}: ${sum}`);

  const reversed = reverseString("Hello World");
  console.log(`Reversed string: ${reversed}`);

  const arr = [1, 2, 3, 4, 5];
  const recursiveSum = sumRecursive(arr);
  console.log(`Sum of elements in array ${arr} using recursion: ${recursiveSum}`);
} catch (error) {
  console.error(`An error occurred: ${error.message}`);
}

// Additional complex and elaborate code...
// ...
// ...

// End of ComplexProgram.js