cities= ['San Fernando','Puyehue','Cisnes','San Fernando','Roboré']

function cityCount (citiesArray) {
	return citiesArray.reduce(function(obj, elem) {
		if (elem in obj)
			obj[elem]++;
		else
			obj[elem] = 1;
		return obj;
	}, {});
}


// another way to solve it
const occurrence = (cities) => {
	//create obj that will return occurrences
	let obj = {}
	//iterate thorough the array
	cities.forEach(city => {
		obj[city] = (obj[city] || 0) + 1
	})
	//check if obj[i] exists, if not obj[i] = obj[city]: 1
	// otherwise obj[i] = obj[city]+1
	//return obj
	return obj
}
console.log(cityCount(cities));
console.log(occurrence(cities));
