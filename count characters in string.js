// https://www.codewars.com/kata/52efefcbcdf57161d4000091
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
function count(string) {
	chars = string.split("");
	let obj = {};
	chars.forEach((char) => {
		obj[char] = (obj[char] || 0) + 1;
	});
	return obj;
}

console.log(count("mississippi"));
