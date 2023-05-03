// Additon problems for micro challenge
// added 2 numbers together with a return
function addTwoNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;

}
console.log( addTwoNumbers(4, 3));

// added 3 numbers together with a return
function addThreeNumbers(firstNumber, secondNumber, thirdNumber) {
  return firstNumber + secondNumber + thirdNumber;
}
console.log(addThreeNumbers(5, 8, 3));

// added 2 numbers toghether without using a return
function addNumbers() {
    let num1 = 2;
    let num2 = 3;
    let sum = num1 + num2;
    console.log('The total is',sum = num1 + num2);
}
addNumbers();

// Conditionals with different sets of numbers, 1st set is the 1st number was bigger
// the 2nd set the 2nd number was bigger and the 3rd set both numbers are the same

// created a function that takes 2 numbers, with the 1st number being greater than the second

let num1 = 8;
let num2 = 3;
function firstBiggerNumber() {
}
if (num1 > num2) {
  console.log(firstBiggerNumber = num1);
}
console.log('First number was bigger!');

// Created a function that takes 2 numbers, with the second number being greater than first number

let num3 = 6;
let num4 = 10;
function secondBiggerNumber() {
}
if (num3 < num4) {
  console.log(secondBiggerNumber = num4);
}
console.log('Second number was bigger!');

// created a function that takes 2 numbers that are the same


let num5 = 7;
let num6 = 7;
function sameNumber() {
  if (num5 === num6) {
    console.log(sameNumber);
  }
  
}
console.log('The numbers are the same!', num5 = num6);

//Created an array that adds the first and last numbers

let array = [5, 4, 3, 7, 2];
function sumArray() {
  let sum = 0;
  let firstNumber = array[0]
  let secondnumber = array[array.length -1];
  console.log(firstNumber + secondnumber);

}
console.log('Total of first and last number of array!');
sumArray();

// created a second array that adds the first and last numbers
let newArray = [8, 1, 6, 9, 10];
function totalArray() {
  let sum = 0;
  let firstNumber = newArray[0];
  let secondNumber = newArray[newArray.length -1];
  console.log(firstNumber + secondNumber);
}
console.log('Total of first and last number of the array!');
totalArray();