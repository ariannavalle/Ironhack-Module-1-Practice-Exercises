//Given an array of cities, return an array with the first letter of each city’s name capitalized. 

var cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];
console.log(cities.map(city => city[0].toUpperCase() + city.substring(1)))

//Imagine you are a Math teacher and you have to grade your students based on their performance on two projects (40% of final grade) and their final exam (60% of final grade). Get a new array of objects, but this time the objects will contain only student´s name, and their final grade.
const students = [
    {
      name: "Tony Parker",
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: "Marc Barchini",
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: "Claudia Lopez",
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: "Alvaro Briattore",
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: "Isabel Ortega",
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: "Francisco Martinez",
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: "Jorge Carrillo",
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: "Miguel López",
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: "Carolina Perez",
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: "Ruben Pardo",
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
]
    
const studentGrades = students.map((student) => {
  let finalGrade = ((student.firstProject + student.secondProject) / 2) * 0.4 + (student.finalExam * 0.6)
  return {
    name: student.name,
    finalGrade: Math.round(finalGrade)
  }
});

console.log(studentGrades)