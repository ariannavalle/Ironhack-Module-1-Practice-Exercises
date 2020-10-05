// https://www.codewars.com/kata/59590976838112bfea0000fa
//  given an array of values and an amount of beggars, return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

function reduceAmount(arr, amount, index) {
    arr[index % arr.length] += amount;
    return arr;
}

function beggars(values, n) {
    const sums = [...Array(n)].fill(0);
    return values.reduce(reduceAmount, sums);
}

console.log(beggars([1, 2, 3, 4, 5], 1)) // [15]
console.log(beggars([1, 2, 3, 4, 5], 2)) // [9, 6]
console.log(beggars([1, 2, 3, 4, 5], 3)) // [5, 7, 3]
console.log(beggars([1, 2, 3, 4, 5], 6)) // [1, 2, 3, 4, 5, 0]
console.log(beggars([1, 2, 3, 4, 5], 0)) // []
