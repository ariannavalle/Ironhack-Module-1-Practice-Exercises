// Create a function that accepts 3 numbers as parameters, and returns their sum.
let sum = (num1,num2,num3) => {return num1 + num2 + num3};
console.log(sum(3, 6, 2));

// Create a function named isNameOddOrEven() that accepts a string as a parameter. The function should return whether a received string has an odd or even number of letters. The expected return should be in the following format - string: ’<name> has an even/odd number of letters’.
let isNameOddOrEven = (string) => {
	return string.length % 2 === 0?  `${string} has an even number of letters.`: `${string} has an odd number of letters.`;
};
console.log(isNameOddOrEven("Bob"));

