//Exercise 1: Calculate the total population in the given array (data):
const data = [
  {
    country: 'USA',
    pop: 340,
  },
  {
    country: 'France',
    pop: 133,
  },
  {
    country: 'Bosnia',
    pop: 5,
  }
]

let totalPopulation = data.reduce((accum, currValue) => {return accum + currValue.pop},0)
console.log(totalPopulation)
// expected output: 478


//exercise 2: Given a menu of foods and their calories, calculate the average number of calories for the entire list.
const menu = [
  { name: 'Carrots', calories: 150 },
  { name: 'Steak', calories: 350 },
  { name: 'Broccoli', calories: 120 },
  { name: 'Chicken', calories: 250 },
  { name: 'Pizza', calories: 520 }
];
let sum = menu.reduce((total, menuItem) => {return total + menuItem.calories},0)
let averageCalories = sum/menu.length;
console.log(averageCalories)
// expected output: 278