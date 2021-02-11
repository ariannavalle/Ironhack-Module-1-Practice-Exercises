const solution = string => {
let buffer = []

string.split("").forEach((str,index) => {

 if (str.toUpperCase() === str) {
    buffer.push(" ")
}
    buffer.push(str)
})
return buffer.join("") }

console.log(solution("camelCasingTest"))