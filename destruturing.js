// Given the following object data, use object destructuring to be able to print the student's first and last name, favorite football club, as well as the city and the country this student is coming from.
const data = {
	name: {
		firstName: "ana",
		lastName: "marino",
	},
	isStudent: true,
	favoriteFootballTeam: "fc barcelona",
	hometown: {
		city: "buenos aires",
		country: "argentina",
	},
};

let {
	name: { firstName, lastName },
	favoriteFootballTeam,
	hometown: { city, country },
} = data;
console.log(firstName, lastName, favoriteFootballTeam, city, country)
