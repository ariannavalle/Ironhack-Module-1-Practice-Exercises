const people = [
    { name: "bob", age: "21" },
    { name: "mary", age: "17" },
    { name: "jill", age: "35" },
    { name: "jake", age: "52" },
];

// input: array of people
// return: name of oldest person
function oldestPerson(arr) {
    let age = 0;
    let name = "";
    arr.forEach((element) => {
        if (element.age > age) {
            age = element.age;
            name = element.name;
        }
    });
    return name;
}
console.log(oldestPerson(people));

// Solution 2
function oldestPerson2(arr) {
  let sorted = [...arr].sort((a,b) => b.age - a.age)
  return sorted[0].name;
}
console.log(oldestPerson2(people));

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// input: array of people
// return: averag age
function averageAge(arr) {
    // return average age of people
    let sum = 0;
    arr.forEach((person) => {
        sum += Number(person.age);
    });
    return sum / arr.length;
}
console.log(averageAge(people));

// solution 2
function averageAge2(arr) {
  // return average age of people
  let sum = arr.reduce((acc,current) => {
    return acc + Number(current.age);
  },0);
  return sum / arr.length;
}
console.log(averageAge2(people));

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const randomString = "abbsshshaaabd";
// input: string
// return: most frequent character
function mostFrequent(string) {
    let freq = {};
    [...string].forEach((character, index) => {
        if (freq[character]) freq[character]++;
        else freq[character] = 1;
    });
    let mostRepeated = -1,
        letter;
    for (let key in freq) {
        if (freq[key] > mostRepeated) {
            mostRepeated = freq[key];
            letter = key;
        }
    }
    return letter;
}
console.log(mostFrequent(randomString));

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// count the number of list items on the page
/* 
<div id="app">
    <ol>
        <li class="listitem">a</li>
        <li class="listitem">b</li>
        <li class="listitem">c</li>
    </ol>
</div> 
*/
function countListItems() {
    let li = document.querySelectorAll("ol > .listitem");
    return li.length;
}
// console.log(`List item count: ${countListItems()}`);
