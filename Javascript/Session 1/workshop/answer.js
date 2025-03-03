// Define a Student constructor function
export function Student(name, age, grade, subjects) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.subjects = subjects;

    // Method to enroll in a new subject
    this.enrollSubject = function(newSubject) {
        if (!this.subjects.includes(newSubject)) {
            this.subjects.push(newSubject);
            console.log(`${this.name} has enrolled in ${newSubject}.`);
        } else {
            console.log(`${this.name} is already enrolled in ${newSubject}.`);
        }
    };

    // Method to improve grade
    this.improveGrade = function(points) {
        this.grade += points;
        console.log(`${this.name} has improved their grade to ${this.grade}.`);
    };
}

// Method to display student details
Student.prototype.getDetails = function() {
    return `Student: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Subjects: ${this.subjects.join(", ")}`;
}

// Create multiple students
const student1 = new Student("Alice Johnson", 16, 10, ["Chemistry", "Math", "Art"]);
const student2 = new Student("David Smith", 17, 11, ["Physics", "History", "Math"]);

// Display student details
console.log(student1.getDetails());
console.log(student2.getDetails());

// Students interact with the school
student1.enrollSubject("Biology");
student2.improveGrade(1);

// A school class with students
export function School(name, students = []) {
    this.name = name;
    this.students = students;

    // Method to add a new student
    this.addStudent = function(student) {
        this.students.push(student);
        console.log(`${student.name} has joined ${this.name}.`);
    };

    // Method to list all students
    this.listStudents = function() {
        console.log(`Students at ${this.name}:`);
        this.students.forEach(student => console.log(student.getDetails()));
    };
}

const mySchool = new School("Greenwood High", [student1, student2]);
mySchool.listStudents();
