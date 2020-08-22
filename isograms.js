// https://www.codewars.com/kata/54ba84be607a92aa900000f1
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str) {
	str = str.toLowerCase().split("");
	let buffer = [];
	for (let i = 0; i < str.length; i++) {
		if (buffer.indexOf(str[i]) === -1) buffer.push(str[i]);
		else return false;
	}
	return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

// best practice solution
function isIsogram(str) {
	return new Set(str.toUpperCase()).size == str.length;
}