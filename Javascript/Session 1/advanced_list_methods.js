//--------------- For-each ---------------
let colors = ["Red", "Green", "Blue"];
colors.forEach((color) => {
    console.log(color);
});

colors.forEach((color, index) => console.log(index, color));


//--------------- Map ---------------
let students = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
];
const start_id = 5291
students.map((student, index) => student.id = start_id + index);

students.forEach(student => console.log(`Student ${student.id} \n Name: ${student.name} \n Age: ${student.age}`));


//--------------- Filter ---------------
console.log("\nStudents over 25 years:");
students.filter(student => student.age > 25).forEach(student => console.log(student.name));


//--------------- Reduce ---------------
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num);
console.log("\nSum of numbers: " + sum);