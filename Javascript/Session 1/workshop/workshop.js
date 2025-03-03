// Define a Student constructor function
function Student(name, age, grade, subjects) {
    this.name = name; // String
    this.age = age; // Int
    this.grade = grade; // Number
    this.subjects = subjects; // List

    // Method to enroll in a new subject
    this.enrollSubject = function(newSubject) {
        // Check if the subject is already in the list of subjects
        // Use !subjects.includes()
        if (!/*write condition*/) {
            // Push the new subject to subjects list
            // write code here
            console.log(`${this.name} has enrolled in ${newSubject}.`);
        } else {
            console.log(`${this.name} is already enrolled in ${newSubject}.`);
        }
    };

    // Method to improve grade
    this.improveGrade = function(points) {
        // Add points improved to the grade
        // write code here
        console.log(`${this.name} has improved their grade to ${this.grade}.`);
    };

    // Method to display student details
    this.getDetails = function() {
        return `Student: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Subjects: ${this.subjects.join(", ")}`;
    };
}

// Create multiple students
const student1 = new Student("Mohanad Hazendar", 16, 10, ["Chemistry", "Math", "Art"]);
const student2 = new Student("Samar Ziyagil", 17, 11, ["Physics", "History", "Math"]);

// Display student details
console.log(student1.getDetails());
console.log(student2.getDetails());

// Students interact with the school
student1.enrollSubject("Biology");
student2.improveGrade(1);

// A school class with students
function School(name, students) {
    this.name = name; // String
    this.students = students; // List

    // Method to add a new student
    this.addStudent = function(student) {
        // 1. Push a new student to the list
        // write code here

        // 2. Print: `{student name} has joined {school name}.`
        // write code here
    };

    // Method to list all students
    this.listStudents = function() {
        console.log(`Students at ${this.name}:`);
        // Print all students {student details}
        // Use students.forEach(student)
    };
}

const mySchool = new School("Fatih", [student1, student2]);
mySchool.listStudents();
