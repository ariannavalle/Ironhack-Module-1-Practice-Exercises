// 1: Capitalize each element of the array - the whole word:
const fruits = ['pineapple', 'orange', 'mango'];
capitalizedFruits = fruits.map(fruit => fruit.toUpperCase())
console.log(capitalizedFruits)

// 2: Capitalize the first letter of every city. Bonus: if the city has 2 or more words in the name, capitalize the first letter of each word.
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];
capitalizedCity = cities.map(city => city[0].toUpperCase() + city.substring(1))
console.log(capitalizedCity);