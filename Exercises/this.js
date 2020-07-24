// TODO: write the methods getAge, addJoke and getRandomJoke
const chuck = {
  firstName: 'Chuck',
  lastName: 'Norris',
  birthDate: new Date('1940-03-10'),
  jokes: [
    'Chuck Norris counted to infinity... Twice.',
    'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis'
  ],
  displayInfo() {
    console.log(
      `My name is ${this.firstName} ${this.lastName} and I have ${this.jokes.length} jokes.`
    );
  },
  getAge() {
    return Math.floor((new Date() - this.birthDate) / 3.15e10);
  },
  addJoke(joke) {
    this.jokes.push(joke);
  },
  getRandomJoke() {
    return this.jokes[Math.floor(Math.random() * this.jokes.length)]
  }
};
chuck.displayInfo();
console.log('getAge', chuck.getAge()); // Should return 80 if you are in 2020
chuck.addJoke('Chuck Norris can divide by zero.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris kills flies with his gun.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.displayInfo();