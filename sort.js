// Exercise 1: Using the array (arrOfStrings), sort an array from shortest string to the longest.
const arrOfStrings = ['cat', 'wolf', 'yo', 'animal'];

let sortByLength = [...arrOfStrings].sort((a,b) => {
    if (a.length > b.length) return 1; 
    if (a.length < b.length) return -1; 
    if (a.length === b.length) return 0;
})
console.log(sortByLength)

// Exercise 2: Using the same arr (arrOfStrings), sort its elements alphabetically.
let sortAlphabetically = [...arrOfStrings].sort((a,b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b) return 1; 
    if (a < b) return -1; 
    if (a === 0 )return 0;
})
console.log(sortAlphabetically)


// Exercise 3: Using the array of people, sort the objects by age, in descending order.
const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 49 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 },
  { name: 'Bill', age: 19 }
];

let sortByAge = [...people].sort((a,b) => {
    if (a.age > b.age) return -1; 
    if (a.age < b.age) return 1; 
    if (a.age === b.age) return 0; 
})
console.log(sortByAge)