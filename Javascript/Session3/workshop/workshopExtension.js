import {Student, School} from './answer.js';

function takeStudentInfo() {
    const name = prompt("Enter student name:");
    const age = Number(prompt("Enter student age:"));
    const grade = Number(prompt("Enter student grade:"));
    const subjects = prompt("Enter student subjects separated by commas:").split(", ");
    return new Student(name, age, grade, subjects);
}

const schoolName = prompt("Enter school name:");
const mySchool = new School(schoolName);

while (true) {
    const student = takeStudentInfo();
    mySchool.students.push(student);
    const addMore = confirm("Do you want to add more students?");
    if (!addMore) break;
}