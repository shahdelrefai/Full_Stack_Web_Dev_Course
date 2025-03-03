// Define a Student class
class Student {
    #name;
    #age;
    #grade;
    #subjects;

    constructor(name, age, grade, subjects = []) {
        this.#name = name;
        this.#age = age;
        this.#grade = grade;
        this.#subjects = subjects;
    }

    getName() {
        return this.#name ?? "Unknown";
    }

    getAge() {
        return this.#age ?? "Unknown";
    }

    getGrade() {
        return this.#grade ?? "No grade yet.";
    }

    getSubjects() {
        return this.#subjects.length > 0 ? this.#subjects : ["No subjects yet."];
    }

    // Method to enroll in a new subject
    enrollSubject(newSubject) {
        if (!this.#subjects.includes(newSubject)) {
            this.#subjects.push(newSubject);
            console.log(`${this.#name} has enrolled in ${newSubject}.`);
        } else {
            console.log(`${this.#name} is already enrolled in ${newSubject}.`);
        }
    }

    // Method to improve grade
    improveGrade(points) {
        this.#grade += points;
        console.log(`${this.#name} has improved their grade to ${this.#grade}.`);
    }

    // Method to display student details
    getDetails() {
        return `Student: ${this.#name}, Age: ${this.#age}, Grade: ${this.#grade}, Subjects: ${this.#subjects.join(", ")}`;
    }
}

// Create multiple students
const student1 = new Student("Alice Johnson", 16, 10, ["Chemistry", "Math", "Art"]);
const student2 = new Student("David Smith", 17, 11, ["Physics", "History", "Math"]);
const student3 = new Student("Mohanad Hazendar", 16, 10); // No subjects provided

// Display student details
console.log(student1.getDetails());
console.log(student2.getDetails());
console.log(student3.getDetails());

// Students interact with the school
student1.enrollSubject("Biology");
student2.improveGrade(1);

// A school class with students
class School {
    constructor(name, students = []) {
        this.name = name;
        this.students = students;
    }

    // Method to add a new student
    addStudent(student) {
        this.students.push(student);
        console.log(`${student.getName()} has joined ${this.name}.`);
    }

    // Method to list all students
    listStudents() {
        console.log(`Students at ${this.name}:`);
        this.students.forEach(student => console.log(student.getDetails()));
    }
}

const mySchool = new School("Greenwood High", [student1, student2]);
mySchool.listStudents();
mySchool.addStudent(student3);
mySchool.listStudents();