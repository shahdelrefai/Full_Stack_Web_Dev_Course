//----------------------let----------------------
// let is block scoped
// let can't be re-declared
// let can be updated
// let is not hoisted
// let is not accessible outside the block
let name = "Mohamed";
let x = 10;
console.log(x);
//let age = 25;

if (true) {
    let age = 30;
    x = 55;
}

//console.log(age); // ReferenceError: age is not defined
console.log(x); // 10 (Change is accessible outside the block)

//console.log(y);
let y = 20; // ReferenceError: Cannot access 'y' before initialization 