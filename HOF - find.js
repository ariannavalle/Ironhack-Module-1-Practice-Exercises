// https://www.codewars.com/kata/coding-meetup-number-4-higher-order-functions-series-find-the-first-python-developer
// return one of the following strings:
// < firstName here >, < country here > (of the first Python developer who has signed up) or
// There will be no Python developers if no Python developer has signed up.

const list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

const list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

// My non-HOF solution
function getFirstPython(list) {
    let str = "There will be no Python developers";
    for (let i = 0; i < list.length; i++) {
        if (list[i].language === "Python") return `${list[i].firstName}, ${list[i].country}`
    }
    return str
}

/* Best Practice
function getFirstPython(list) {
  const dev = list.find(x => x.language === "Python")
  return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers"
}
*/

console.log(getFirstPython(list1)) // 'Victoria, Puerto Rico'
console.log(getFirstPython(list2)) //'There will be no Python developers'