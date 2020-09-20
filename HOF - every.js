// https://www.codewars.com/kata/coding-meetup-number-6-higher-order-functions-series-can-they-code-in-the-same-language
// return either:
// true if all developers in the list code in the same language; or
// false otherwise.

const list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

const list2 = [
    { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
    { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
];

function isSameLanguage(list) {
    return list.every((developer) => developer.language === list[0].language) 
}

console.log(isSameLanguage(list1)) // true
console.log(isSameLanguage(list2)) //false