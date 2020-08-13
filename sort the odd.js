// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
// Your task is to sort ascending odd numbers but even numbers must be on their places.

function sortArray(array) {
    const odd = []
    const even = []
    const newArray = []

    array.forEach((element) => {
        if (element % 2 === 0) even.push(element)
        else odd.push(element)
    });

    odd.sort((a,b) => a-b)

    array.forEach((element) => {
        if (element % 2 === 0) newArray.push(even.shift())
        else newArray.push(odd.shift())
    });

    return newArray
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))
// [1, 3, 2, 8, 5, 4]
