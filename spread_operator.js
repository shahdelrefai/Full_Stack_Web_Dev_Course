//The spread operator (...) allows an iterable to expand in places where
// multiple arguments or elements are expected.

//-------------With Lists-------------
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]

//-------------With Objects-------------
let person = { name: "Alice", age: 25 };
let newPerson = { ...person, city: "New York" };
console.log(newPerson); // { name: "Alice", age: 25, city: "New York" }

//-------------With Variables-------------
function sum(a, b, c) {
    return a + b + c;
}
let nums = [1, 2, 3];
console.log(sum(...nums)); // 6