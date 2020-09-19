// https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers
// Your task is to return an array where each object will have a new property 'greeting' with the following string value:
// Hi < firstName here >, what do you like the most about < language here >?


var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

function greetDevelopers(list) {
  list.forEach(developer => {
    developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`
  });
  return list;
}

console.log(greetDevelopers(list1))