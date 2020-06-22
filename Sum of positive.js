//Given an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
    return arr.filter(number => number>0).reduce((accum, current) => {return accum + current},0)
}