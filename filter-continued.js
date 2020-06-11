//Exercise 1: Given an array of numbers, filter out the numbers that are not even, and are less than 100.
const numbers = [1, 60, 112, 123, 100, 99, 73];
result = numbers.filter(number => number % 2 !== 0 && number < 100)
console.log(result)

//Exercise 2: From the given array of people, get the people who are allowed to consume alcoholic beverages (based on the US law). Bonus: Get just their names, we don’t need their age.
const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];

let allowed = people.filter(person => {return person.age >= 21})
let peopleAllowed = allowed.map(person => person.name)
console.log(peopleAllowed);