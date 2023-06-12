// 1. Write a function with one argument that checks if the argument is a number.
// If it is, return whether the number is even or odd. If the argument is not a number, return an empty string.

function T1(value) {
  if (typeof value !== "number") {
    return "";
  }
  if (value % 2 === 0) {
    return "Число парне";
  } else {
    return "Число не парне";
  }
}

// 2. Write a function that starts iterating numbers from 1 to infinity and checks if each number is prime
// (a prime number is divisible only by 1 and itself). If a prime number is found, it is added to an array.
// After finding the fifth prime number, the function should return the sum of all five prime numbers in the array.

function T2() {
  let number = 1;
  let simpleNumbers = [];

  for (let i = 0; i < 5; number++) {
    if (ValueIsSimple(number)) {
      simpleNumbers[i] = number;
      i++;
    }
  }
  return SumOfArrayNumbers(simpleNumbers);
}
function ValueIsSimple(value) {
  if (value <= 1) return false;

  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
}
function SumOfArrayNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

// 3. Write a function with one argument, n, which is a number. The function should return the sum of the following series:
// 1 + 11 + 111 + 1111 + ..., where each element is a number with a continuously increasing number of ones.
function T3(n) {
  let array = [];
  let row = "";

  for (let i = 0; i < n; i++) {
    if (row === "") {
      row = "1";
    } else {
      row += "1";
    }

    array[i] = Number(row);
  }

  return SumOfArrayNumbers(array);
}
// Functions to check if a value is a number, find the sum of an array of numbers, and check if a number is prime
// are reused from previous code snippets.