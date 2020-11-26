// https://www.codewars.com/kata/525f50e3b73515a6db000b83/javascript
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

const createPhoneNumber = numbers => `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`