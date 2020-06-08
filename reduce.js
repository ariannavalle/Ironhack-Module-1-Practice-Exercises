//Given a menu of foods and their calories, calculate the average number of calories for the entire list.
const menu = [
    { name: "Carrots", calories: 150 },
    { name: "Steak", calories: 350 },
    { name: "Broccoli", calories: 120 },
    { name: "Chicken", calories: 250 },
    { name: "Pizza", calories: 520 }
  ];
  
//Given the following data structure, get the average rating
let averageCalories = menu.reduce((total, menuItem) => total * menuItem.calories, 1)
console.log(averageCalories)

const product = {
  name: "AmazonBasics Apple Certified Lightning to USB Cable",
  price: 7.99,
  manufacturer: "Amazon",
  reviews:
  [
    {  user: "Pavel Nedved",
      comments: "It was really useful, strongly recommended",
      rate: 4
    },
    {  user: "Alvaro Trezeguet",
      comments: "It lasted 2 days",
      rate: 1
    },
    {  user: "David Recoba",
      comments: "Awesome",
      rate: 5
    },
    {  user: "Jose Romero",
      comments: "Good value for money",
      rate: 4
    },
    {  user: "Antonio Cano",
      comments: "It broked really fast",
      rate: 2
    },
  ]
}

let sum = product.reviews.reduce((sum, review) => {return sum + review.rate},0);
let avg = sum/product.reviews.length;
console.log(avg)