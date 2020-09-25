// https://www.codewars.com/kata/filter-coffee
// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

function search(budget, prices) {
    return prices.filter(price => price <= budget).sort((a,b) => a-b).toString()
}

// "Should filter out the prices outside budget"
console.log(search(3, [6, 1, 2, 9, 2])) //"1,2,2"
// "Should filter out the prices outside budget"
console.log(search(14, [7, 3, 23, 9, 14, 20, 7])) //"3,7,7,9,14"\
// "Should return an empty string when budget is zero"
console.log(search(0, [6, 1, 2, 9, 2])) //""