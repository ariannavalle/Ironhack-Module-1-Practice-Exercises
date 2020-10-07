// https://www.codewars.com/kata/coding-meetup-number-3-higher-order-functions-series-is-ruby-coming
// return:
// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.

const list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

const list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' }
];

// My solution
function isRubyComing(list) {
    let ruby = false;
    list.filter(developer => {
        if (developer.language === "Ruby") ruby = true;
    });
    return ruby;
}

/* Best practice
function isRubyComing(list) {
    return list.some(e => e.language === 'Ruby');
}
*/

console.log(isRubyComing(list1))
console.log(isRubyComing(list2))
