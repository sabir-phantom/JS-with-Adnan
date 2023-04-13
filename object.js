// Object - properties, methods()
// Array - index : value
// key : value
let person = {
    fname: "Mashkur Alam",
    lname: "Sabir",
    age: 28,
    height: 5.7,
    f_movies: ["Titanic", "Wall-E"],
    student: {
        occupation: "dev",
        salary: 2000
    }
}

console.log(person.f_movies[1]);
console.log("Salary : " + person.student.salary);